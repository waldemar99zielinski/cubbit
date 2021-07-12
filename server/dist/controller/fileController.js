"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFile = exports.postFile = exports.getFileInfo = void 0;
const fileQuery_1 = require("../queries/fileQuery");
const encritpion_1 = require("../utils/encritpion");
const fileUpload_1 = require("../utils/fileUpload");
const getFileInfo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        // not uuid type
        if (id.length !== 36) {
            return res.status(404).json({
                message: `file with id=${id} not found`,
            });
        }
        const response = yield fileQuery_1.getFileInfoQuery(id);
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
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.getFileInfo = getFileInfo;
const postFile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.files) {
            return res.status(400).end("Please provide a file");
        }
        if (!req.body.name || !req.body.iv) {
            return res
                .status(400)
                .json("Please provide body with file name and mime and iv");
        }
        const file = req.files.file;
        // get rid of spaces in file name
        file.name = file.name.split(" ").join("_");
        // create file in db
        const response = yield fileQuery_1.createFileQuery(req.body.name, file.size, req.body.mime || "unknown", null, req.body.iv);
        const dataBaseId = response.rows[0].file_id;
        // s3 upload
        const params = {
            Bucket: "cubbit-task",
            Key: dataBaseId,
            Body: file.data,
        };
        const stored = yield fileUpload_1.s3.upload(params).promise();
        const fileInfoAws = stored;
        // update file url in db
        const urlUpdateResponse = yield fileQuery_1.updateURL(dataBaseId, stored.Location);
        const updatedFile = urlUpdateResponse.rows[0];
        const fileDBInfo = {
            file_id: updatedFile.file_id,
            name: updatedFile.name,
            size: updatedFile.size,
            mime: updatedFile.mime,
        };
        res.status(201).json({ file: fileDBInfo });
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.postFile = postFile;
const getFile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        // not uuid type
        if (id.length !== 36) {
            return res.status(404).json({
                message: `file with id=${id} not found`,
            });
        }
        const response = yield fileQuery_1.getFileToDecryptQuery(id);
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
            Bucket: fileUpload_1.AWS_BUCKET,
        };
        // get file form aws
        const data = yield fileUpload_1.s3.getObject(params).promise();
        encritpion_1.setupHeaders(res, fileDBInfo.mime, fileDBInfo.name);
        res.write(data.Body);
        res.end();
    }
    catch (error) {
        return res.status(500).json({ error });
    }
});
exports.getFile = getFile;
//# sourceMappingURL=fileController.js.map