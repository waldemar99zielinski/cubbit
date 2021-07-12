import express from "express";
import dotenv from "dotenv";
import { Pool } from "pg";
import cors from "cors";
import app from "./app";
import { exit } from "process";
import { s3, AWS_BUCKET } from "./utils/fileUpload";
dotenv.config({ path: "./conf.env" });

const PORT = process.env.PORT;

// test db connection
const pool = new Pool({});

pool.query("SELECT NOW()", (err: Error, result: any) => {
  if (err) {
    // tslint:disable-next-line:no-console
    console.error("[ERROR] ", err);
    exit(1);
  } else {
    // tslint:disable-next-line:no-console
    console.log("[INFO] Database connected successfully");
  }
});

// test AWS connection
const params = {
  Bucket: AWS_BUCKET,
};

s3.headBucket(params, (err, data) => {
  if (err) {
    // tslint:disable-next-line:no-console
    console.error(err, err.stack);
    exit(1);
  } else {
    // tslint:disable-next-line:no-console
    console.log("[INFO] AWS services available");
  }
});

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`[INFO] server is running at port ${PORT}`);
});
