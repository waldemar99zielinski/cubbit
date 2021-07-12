"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
const app_1 = __importDefault(require("./app"));
const process_1 = require("process");
const fileUpload_1 = require("./utils/fileUpload");
dotenv_1.default.config({ path: "./conf.env" });
const PORT = process.env.PORT;
// test db connection
const pool = new pg_1.Pool({});
pool.query("SELECT NOW()", (err, result) => {
    if (err) {
        // tslint:disable-next-line:no-console
        console.error("[ERROR] ", err);
        process_1.exit(1);
    }
    else {
        // tslint:disable-next-line:no-console
        console.log("[INFO] Database connected successfully");
    }
});
// test AWS connection
const params = {
    Bucket: fileUpload_1.AWS_BUCKET,
};
fileUpload_1.s3.headBucket(params, (err, data) => {
    if (err) {
        // tslint:disable-next-line:no-console
        console.error(err, err.stack);
        process_1.exit(1);
    }
    else {
        // tslint:disable-next-line:no-console
        console.log("[INFO] AWS services available");
    }
});
app_1.default.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`[INFO] server is running at port ${PORT}`);
});
//# sourceMappingURL=index.js.map