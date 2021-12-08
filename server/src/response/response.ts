import { Response } from "express";

// Handle errors
const errorResponse = (
  res: Response,
  message: string | {},
  statusCode: number = 500
) => {
  res.status(statusCode).json({
    success: false,
    error: {
      statusCode,
      message: message instanceof Error ? message.message : message,
    },
  });
};

// Handle Success
const successResponse = (
  res: Response,
  message: string | {} | [],
  statusCode: number = 500
) => {
  res.status(statusCode).json({
    success: true,
    response: {
      statusCode,
      message,
    },
  });
};

export { errorResponse, successResponse };
