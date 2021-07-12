"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
// routes
const fileRoute_1 = __importDefault(require("./route/fileRoute"));
const app = express_1.default();
app.use(express_fileupload_1.default());
// define a route handler for the default home page
app.use(cors_1.default({
    exposedHeaders: "File-name",
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(`/v1/files`, fileRoute_1.default);
app.use("*", (req, res) => {
    res.status(404).json({
        status: "error",
        message: "path not found",
    });
});
exports.default = app;
//# sourceMappingURL=app.js.map