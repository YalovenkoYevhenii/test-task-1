import AppError from "./AppError";

class ValidationError extends AppError {
  public errors: string[];

  constructor(status: number, message: string, errors: string[] = []) {
    super(status, message);

    this.errors = errors;
  }

  static BadRequest(message: string, errors: string[]) {
    return new ValidationError(400, message, errors);
  }
}

export default ValidationError;