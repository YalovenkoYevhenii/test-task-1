import { NextFunction, Request, Response } from "express";
import AppError from "../exceptions/AppError";
import ERROR_MESSAGES from "../constants/ErrorMessages";
import ValidationError from "../exceptions/ValidationError";


function ErrorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof ValidationError) {
    res.status(err.status).json({ message: err.message, errors: err.errors });
  } else if (err instanceof AppError) {
    res.status(err.status).json({ message: err.message });
  } else {
    res.status(500).json({ message: ERROR_MESSAGES.s500SomethingWentWrong });
  }
}

export default ErrorMiddleware;