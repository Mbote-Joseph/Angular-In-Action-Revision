import { Component } from '@angular/core';
import { StockInterface, StocksService } from './services/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular In Action';
  stocks: Array<StockInterface> | undefined;

  constructor(service: StocksService) {
    service.load(['AAPL']).subscribe((stocks) => {});
  }
}
