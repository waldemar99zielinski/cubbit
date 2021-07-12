import { Request, Response, NextFunction, Router } from "express";
import { UploadedFile } from "express-fileupload";
import * as crypto from "crypto";
import {
  createFileQuery,
  getFileInfoQuery,
  updateURL,
  getFileToDecryptQuery,
} from "../queries/fileQuery";
import { decryptFile, encryptFile, setupHeaders } from "../utils/encritpion";
import { s3, AWS_BUCKET } from "../utils/fileUpload";

export const getFileInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    // not uuid type
    if (id.length !== 36) {
      return res.status(404).json({
        message: `file with id=${id} not found`,
      });
    }

    const response = await getFileInfoQuery(id);

    // no data returned
    if (response.rowCount === 0) {
      return res.status(404).json({
        message: `file with id=${id} not found`,
      });
    }

    const fileInfo = response.rows[0];

    res.status(200).json({
      fileInfo,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const postFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.files) {
      return res.status(400).end("Please provide a file");
    }
    if (!req.body.name || !req.body.iv) {
      return res
        .status(400)
        .json("Please provide body with file name and mime and iv");
    }

    const file: UploadedFile = req.files.file as UploadedFile;
    // get rid of spaces in file name
    file.name = file.name.split(" ").join("_");

    // create file in db
    const response = await createFileQuery(
      req.body.name,
      file.size,
      req.body.mime || "unknown",
      null,
      req.body.iv
    );

    const dataBaseId = response.rows[0].file_id;

    // s3 upload
    const params = {
      Bucket: "cubbit-task",
      Key: dataBaseId,
      Body: file.data,
    };

    const stored = await s3.upload(params).promise();
    const fileInfoAws = stored;

    // update file url in db
    const urlUpdateResponse = await updateURL(dataBaseId, stored.Location);
    const updatedFile = urlUpdateResponse.rows[0];

    const fileDBInfo = {
      file_id: updatedFile.file_id,
      name: updatedFile.name,
      size: updatedFile.size,
      mime: updatedFile.mime,
    };
    res.status(201).json({ file: fileDBInfo });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
export const getFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    // not uuid type
    if (id.length !== 36) {
      return res.status(404).json({
        message: `file with id=${id} not found`,
      });
    }

    const response = await getFileToDecryptQuery(id);

    // no data returned
    if (response.rowCount === 0) {
      return res.status(404).json({
        message: `file with id=${id} not found`,
      });
    }
    const fileDBInfo = response.rows[0];

    // aws params
    const params = {
      Key: fileDBInfo.file_id,
      Bucket: AWS_BUCKET,
    };

    // get file form aws
    const data = await s3.getObject(params).promise();

    setupHeaders(res, fileDBInfo.mime, fileDBInfo.name);
    res.write(data.Body);
    res.end();
  } catch (error) {
    return res.status(500).json({ error });
  }
};
