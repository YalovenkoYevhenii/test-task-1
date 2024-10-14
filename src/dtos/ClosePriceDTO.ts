import { IClosePriceData, IPriceData } from "../types/priceTypes";

class ClosePriceDTO implements IClosePriceData {
  public timestamp: string;
  public close: string;

  constructor(priceData: IPriceData) {
    this.timestamp = priceData.timestamp;
    this.close = priceData.close;
  }
}

export default ClosePriceDTO;