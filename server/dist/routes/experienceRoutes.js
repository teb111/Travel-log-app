"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var services_1 = __importDefault(require("../services"));
var experienceController_1 = __importDefault(require("../controllers/experienceController"));
var ExperienceControllerHandler = (0, experienceController_1.default)(services_1.default);
var router = express_1.default.Router();
router.route("/").post(function (req, res, next) {
    ExperienceControllerHandler.addUserExperience(req, res, next);
});
exports.default = router;
