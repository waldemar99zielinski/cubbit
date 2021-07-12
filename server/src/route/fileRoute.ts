import express from "express";
import * as fileController from "../controller/fileController";

const router = express.Router();

router.route("/").post(fileController.postFile);
router.route("/:id").get(fileController.getFileInfo);
router.route("/:id/download").get(fileController.getFile);

export default router;
