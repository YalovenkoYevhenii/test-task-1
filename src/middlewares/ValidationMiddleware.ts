import { Request, Response, NextFunction } from 'express';
import ERROR_MESSAGES from '../constants/ErrorMessages';
import { IValidationCallback, PriceQuery } from '../types/priceTypes';
import ValidationError from '../exceptions/ValidationError';

function ValidationMiddleware(cb: IValidationCallback) {

  return (req: Request<{}, {}, {}, PriceQuery>, res: Response, next: NextFunction) => {
    const validationResult = cb(req);
    if (validationResult.passed) {
      next();
    } else {
      next(ValidationError.BadRequest(ERROR_MESSAGES.s400ValidationError, [validationResult.errorMessage as string]))
    }

  }
}

export default ValidationMiddleware;