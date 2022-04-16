import {Component, DoCheck} from '@angular/core';

import {CurrencyService} from '../services/currency.service';

@Component({
  selector: 'app-converter-body',
  templateUrl: './converter-body.component.html',
  styleUrls: ['./converter-body.component.css'],
})
export class ConverterBodyComponent implements DoCheck {

  currencyFrom = 'UAH';
  currencyTo = 'UAH';
  currencyRate = 1;
  amount = 0;
  result = 0;

  constructor(public currencyService: CurrencyService) { }

  selectCurrencyFrom = (event: any) => {
    this.currencyFrom = event.target.value;
    this.currencyService.getRate(this.currencyFrom, this.currencyTo).subscribe(res => this.currencyRate = res.rates[this.currencyTo.toString()]);
  };

  selectCurrencyTo = (event: any) => {
    this.currencyTo = event.target.value;
    this.currencyService.getRate(this.currencyFrom, this.currencyTo).subscribe(res => this.currencyRate = res.rates[this.currencyTo.toString()]);
  };

  convert = (event: any) => {
    this.amount = event.target.value;
  }

  convertRevert = (event: any) => {
    this.result = event.target.value;
    this.amount = this.result / this.currencyRate;
  }

  ngDoCheck() {
    this.result = this.amount * this.currencyRate;
  }

}
