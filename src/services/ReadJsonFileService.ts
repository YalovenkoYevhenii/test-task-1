import path from "path";
import { readFile } from 'fs/promises';
import { IPriceData, IDataBase, IStockData } from "../types/priceTypes";
import AppError from "../exceptions/AppError";
import ERROR_MESSAGES from "../constants/ErrorMessages";
import PriceDTO from "../dtos/PriceDTO";
import paths from "../constants/Paths";
import { getIsDateInRange } from "../utils/dateUtils";


class ReadJsonFileService implements IDataBase {

  private getFilePath(ticker: string): string {
    return path.join(paths.BASE_TIME_SERIES_DAILY, `${ticker}.json`);
  }

  private transformStockToPriceData(stockData: IStockData): IPriceData[] {
    return Object.entries(stockData).map(([dateTimestamp, priceData]) => new PriceDTO(dateTimestamp, priceData))
  }
  
  private async readJsonFile(filePath: string): Promise<IStockData> {
    try {
      const file = await readFile(filePath, { encoding: 'utf-8' });
      return JSON.parse(file)["Time Series (Daily)"];
    } catch (error) {
      throw new AppError(400, ERROR_MESSAGES.s400incorrectPath);
    }
  }

  public async readData(ticker: string): Promise<IPriceData[]> {
    try {
      const filePath = this.getFilePath(ticker);
      const fileData = await this.readJsonFile(filePath);

      return this.transformStockToPriceData(fileData);
    } catch (err) {
      throw err;
    }
  }
  public async readDataFilteredByDate(ticker: string, from: string, to: string): Promise<IPriceData[]> {
    try {
      const filePath = this.getFilePath(ticker);
      const fileData = await this.readJsonFile(filePath);

      const priceData = this.transformStockToPriceData(fileData);
      
      const isDateInRange = getIsDateInRange(new Date(from), new Date(to));

      return priceData.filter((priceDataItem) => isDateInRange(new Date(priceDataItem.timestamp)));
    } catch (err) {
      throw err;
    }
  }
}

export default ReadJsonFileService;