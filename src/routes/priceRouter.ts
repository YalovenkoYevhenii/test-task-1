import { Router } from "express";
import PriceController from "../controllers/PriceController";
import ValidationMiddleware from "../middlewares/ValidationMiddleware";
import { tickerQueryValidation } from "../validations/priceValidations";

const priceRouter = Router();

priceRouter.get('/', ValidationMiddleware(tickerQueryValidation), PriceController.getPrices)


export default priceRouter;