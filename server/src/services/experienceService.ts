import { Request, Response } from "express";
import { errorResponse, successResponse } from "../response/response";

const ExperienceService = () => {
  const addExperience = (req: Request, res: Response) => {
    const { email } = req.body;
    console.log(email);
    successResponse(res, email, 200);

    // errorResponse(res, "Bad Request", 403);
  };

  return {
    addExperience,
  };
};

export default ExperienceService;
