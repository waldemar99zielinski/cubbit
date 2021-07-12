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
exports.updateURL = exports.getFileInfoQuery = exports.getFileToDecryptQuery = exports.createFileQuery = void 0;
const pg_1 = require("pg");
const createFileQuery = (name, size, mime, url, iv) => __awaiter(void 0, void 0, void 0, function* () {
    const query = "INSERT INTO files (name, size, mime, url, iv) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const pool = new pg_1.Pool({});
    const response = yield pool.query(query, [name, size, mime, url, iv]);
    return response;
});
exports.createFileQuery = createFileQuery;
const getFileToDecryptQuery = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = "Select file_id, name, size, mime, url, iv from files where file_id = $1";
    const pool = new pg_1.Pool({});
    const response = yield pool.query(query, [id]);
    return response;
});
exports.getFileToDecryptQuery = getFileToDecryptQuery;
const getFileInfoQuery = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = "Select file_id, name, size, mime, iv from files where file_id = $1";
    const pool = new pg_1.Pool({});
    const response = yield pool.query(query, [id]);
    return response;
});
exports.getFileInfoQuery = getFileInfoQuery;
const updateURL = (id, url) => __awaiter(void 0, void 0, void 0, function* () {
    const query = "Update files set url=$1 where file_id = $2 RETURNING *";
    const pool = new pg_1.Pool({});
    const response = yield pool.query(query, [url, id]);
    return response;
});
exports.updateURL = updateURL;
//# sourceMappingURL=fileQuery.js.map