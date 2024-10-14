import { Request, Response, NextFunction } from 'express';

export interface IStockDataItem {
  "1. open": string;
  "2. high": string;
  "3. low": string;
  "4. close": string;
  "5. volume": string;
}
export interface IStockData {
  [date: string]: IStockDataItem;
}

export interface IPriceData {
  timestamp: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

export interface IClosePriceData {
  timestamp: string;
  close: string;
}

export interface IDataBase {
  readData(ticker: string): Promise<IPriceData[]>;
  readDataFilteredByDate(ticker: string, from?: string, to?: string): Promise<IPriceData[]>;
}

export interface PriceQuery {
  ticker: string;
  from?: string;
  to?: string;
}

export interface IValidationCallback {
  (req: Request<{}, {}, {}, PriceQuery>): { passed: boolean, errorMessage?: string };
}