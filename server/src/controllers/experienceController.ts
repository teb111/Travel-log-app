import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";

const ExperienceController = (serviceContainer: ReturnType<typeof Object>) => {
  const addUserExperience = asyncHandler(
    async (req: Request, res: Response) => {
      try {
        console.log(req.body);
        return req.body;
      } catch (error) {
        console.log(error);
      }
    }
  );

  return {
    addUserExperience,
  };
};

export default ExperienceController;
