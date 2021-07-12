"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupHeaders = exports.decryptFile = exports.encryptFile = void 0;
const crypto = __importStar(require("crypto"));
const encryptFile = (file, key, salt) => {
    try {
        const algo = "aes-256-ctr";
        //   key = crypto.randomBytes(32);
        const cipher = crypto.createCipheriv(algo, Buffer.from(key), salt);
        const crypted = Buffer.concat([cipher.update(file.data), cipher.final()]);
        return crypted;
    }
    catch (err) {
        // tslint:disable-next-line:no-console
        console.error(err);
    }
};
exports.encryptFile = encryptFile;
const decryptFile = (file, key, salt) => {
    try {
        // tslint:disable-next-line:no-console
        console.error("decription: ", file);
        const algo = "aes-256-ctr";
        const keyBuff = Buffer.from(key, "base64");
        const cipher = crypto.createDecipheriv(algo, keyBuff, salt);
        const decrypted = Buffer.concat([cipher.update(file), cipher.final()]);
        return decrypted;
    }
    catch (err) {
        // tslint:disable-next-line:no-console
        console.error(err);
    }
};
exports.decryptFile = decryptFile;
// Set proper headers for the response
const setupHeaders = (res, mime, name) => {
    res.writeHead(200, {
        "Content-Type": mime,
        "Content-disposition": "attachment;filename=" + name,
        "File-name": name,
        Connection: "close",
    });
};
exports.setupHeaders = setupHeaders;
//# sourceMappingURL=encritpion.js.map