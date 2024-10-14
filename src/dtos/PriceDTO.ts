import { IPriceData, IStockDataItem } from "../types/priceTypes";

class PriceDTO implements IPriceData {
  public timestamp: string;
  public open: string;
  public high: string;
  public low: string;
  public close: string;
  public volume: string;

  constructor(timestampKey: string, stockDataItem: IStockDataItem) {
    this.timestamp = timestampKey;
    this.open = stockDataItem["1. open"];
    this.high = stockDataItem["2. high"];
    this.low = stockDataItem["3. low"];
    this.close = stockDataItem["4. close"];
    this.volume = stockDataItem["5. volume"];
  }

}

export default PriceDTO;