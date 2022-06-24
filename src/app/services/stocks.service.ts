import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Declares a stock array and API variables
let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'TWTR'];
let service: string = 'https://angular2-in-action-api.herokuapp.com';

export interface StockInterface {
  symbol: any;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  constructor(private http: HttpClient) {}

  // To get the stocks
  get() {
    return stocks.slice();
  }

  // To add a stock
  add(stock: string) {
    stocks.push(stock);
    return this.get();
  }

  // To remove a stock
  remove(stock: string) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  // Method to call HttpClient service to lead stock values from API
  load(symbols: any) {
    if (symbols) {
      return this.http.get<Array<StockInterface[]>>(
        `${service}/stocks/snapshot?symbols=${symbols.join(',')}`
      );
      // .toPromise();
    } else {
      return this.http.get<Array<StockInterface[]>>(
        `${service}/stocks/snapshot`
      );
    }
  }
}
