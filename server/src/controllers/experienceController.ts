import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";

const ExperienceController = (serviceContainer: ReturnType<typeof Object>) => {
  const addUserExperience = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const experience = serviceContainer.experienceService.addExperience(
          req,
          res
        );
        return experience;
      } catch (error) {
        if (error instanceof Error) {
          res.status(500).json({
            success: false,
            error: {
              statusCode: 500,
              message: error.message ?? "Internal Server Error",
            },
          });
        }
      }
      next();
    }
  );

  return {
    addUserExperience,
  };
};

export default ExperienceController;
