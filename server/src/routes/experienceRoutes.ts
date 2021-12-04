import express, { Router } from "express";
import ServiceContainer from "../services";
import ExperienceController from "../controllers/experienceController";
const ExperienceControllerHandler = ExperienceController(ServiceContainer);
const router = express.Router();

router.route("/").post((req, res, next) => {
  ExperienceControllerHandler.addUserExperience(req, res, next);
});

export default router;
