"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var morgan_1 = __importDefault(require("morgan"));
var db_1 = __importDefault(require("./config/db"));
dotenv_1.default.config({});
(0, db_1.default)();
var app = (0, express_1.default)();
if (process.env.NODE_ENV === "development") {
    app.use((0, morgan_1.default)("dev"));
}
app.get("/", function (req, res) {
    res.send("Yeahhhhhhhh");
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("server runing in " + process.env.NODE_ENV + " mode on port " + PORT);
});
