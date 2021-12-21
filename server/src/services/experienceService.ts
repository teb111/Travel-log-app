import { NextFunction, Request, Response } from "express";
import { errorResponse, successResponse } from "../response/response";
import { validateEmail } from "../utils/validateMail";

const ExperienceService = () => {
  const addExperience = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body;
      if (!email) {
        errorResponse(res, "Please enter your email");
      } else if (!validateEmail(email)) {
        return errorResponse(res, "Please enter a valid email format");
      } else {
        console.log(email);
      }
    } catch (error) {
      if (error instanceof Error) {
        return next(errorResponse(res, error, 404));
      }
    }

    // successResponse(res, email, 200);
  };

  return {
    addExperience,
  };
};

export default ExperienceService;
