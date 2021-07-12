import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
// routes
import fileRouter from "./route/fileRoute";

const app = express();
app.use(fileUpload());
// define a route handler for the default home page

app.use(
  cors({
    exposedHeaders: "File-name",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`/v1/files`, fileRouter);

app.use("*", (req, res) => {
  res.status(404).json({
    status: "error",

    message: "path not found",
  });
});

export default app;
