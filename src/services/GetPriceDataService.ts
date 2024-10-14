import { IDataBase } from "../types/priceTypes";

class GetPriceDataService {
  private priceDataBase: IDataBase;

  constructor(dataBase: IDataBase) {
    this.priceDataBase = dataBase;
  }

  async getData(ticker: string) {
    try {
      return this.priceDataBase.readData(ticker);
    } catch (err) {
      throw err;
    }
  }
  async getDataFilteredByDate(ticker: string, from?: string, to?: string) {
    try {
      return this.priceDataBase.readDataFilteredByDate(ticker, from, to);
    } catch (err) {
      throw err;
    }
  }
}

export default GetPriceDataService;