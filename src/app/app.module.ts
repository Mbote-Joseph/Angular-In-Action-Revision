import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { StocksService } from './services/stocks.service';
import { SummaryComponent } from './components/summary/summary.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FooterComponent, HeaderComponent, SummaryComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [StocksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
