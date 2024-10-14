import ERROR_MESSAGES from "../constants/ErrorMessages";
import { IValidationCallback } from "../types/priceTypes";

export const tickerQueryValidation: IValidationCallback = (req) => {
  if (req.query.ticker) return { passed: true };

  return { passed: false, errorMessage: ERROR_MESSAGES.s400InvalidQuery };
}