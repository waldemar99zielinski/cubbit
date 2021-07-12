import * as crypto from "crypto";
import fileUpload, { UploadedFile } from "express-fileupload";
import { Response } from "express";

export const encryptFile = (file: UploadedFile, key: any, salt: string) => {
  try {
    const algo = "aes-256-ctr";
    //   key = crypto.randomBytes(32);
    const cipher = crypto.createCipheriv(algo, Buffer.from(key), salt);
    const crypted = Buffer.concat([cipher.update(file.data), cipher.final()]);
    return crypted;
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
  }
};

export const decryptFile = (file: Buffer, key: any, salt: string) => {
  try {
    // tslint:disable-next-line:no-console
    console.error("decription: ", file);
    const algo = "aes-256-ctr";
    const keyBuff = Buffer.from(key, "base64");

    const cipher = crypto.createDecipheriv(algo, keyBuff, salt);
    const decrypted = Buffer.concat([cipher.update(file), cipher.final()]);
    return decrypted;
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(err);
  }
};

// Set proper headers for the response
export const setupHeaders = (res: Response, mime: string, name: string) => {
  res.writeHead(200, {
    "Content-Type": mime,
    "Content-disposition": "attachment;filename=" + name,
    "File-name": name,
    Connection: "close",
  });
};
