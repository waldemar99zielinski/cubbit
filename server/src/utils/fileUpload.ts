import * as aws from "aws-sdk";
import dotenv from "dotenv";
import { nanoid } from "nanoid";

dotenv.config({ path: "./conf.env" });

const accessKeyId = process.env.KEY_ID;
const secretAccessKey = process.env.SECRET_KEY;

export const s3 = new aws.S3({
  accessKeyId,
  secretAccessKey,
});

export const AWS_BUCKET = process.env.AWS_BUCKET;
