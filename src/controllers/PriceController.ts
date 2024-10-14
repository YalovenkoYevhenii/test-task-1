import { NextFunction, Request, Response } from "express";
import GetPriceDataService from "../services/GetPriceDataService";
import ReadJsonFileService from "../services/ReadJsonFileService";
import { IClosePriceData, IPriceData, PriceQuery } from "../types/priceTypes";
import ClosePriceDTO from "../dtos/ClosePriceDTO";

class PriceController {
  async getPrices(req: Request<{}, {}, {}, PriceQuery>, res: Response<IClosePriceData[]>, next: NextFunction) {
    try {
      const { ticker, from, to } = req.query;

      const priceDataService = new GetPriceDataService(new ReadJsonFileService());
      let priceData: IPriceData[];
      if (from || to) {
        priceData = await priceDataService.getDataFilteredByDate(ticker, from, to);
      } else {
        priceData = await priceDataService.getData(ticker);
      }
      const closePriceData: IClosePriceData[] = priceData.map((priceDataItem: IPriceData) => new ClosePriceDTO(priceDataItem));

      res.status(200).json(closePriceData);
    } catch (err) {
      next(err);
    }
  }
}


export default new PriceController();