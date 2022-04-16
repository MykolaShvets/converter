import {Component, OnInit} from '@angular/core';

import {CurrencyService} from '../services/currency.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  logo = 'https://www.svgrepo.com/show/153352/currency-value.svg';
  usdToUah = 0;
  eurToUah = 0;

  constructor(public currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getRate('USD', 'UAH').subscribe(res => this.usdToUah = res.rates.UAH);
    this.currencyService.getRate('EUR', 'UAH').subscribe(res => this.eurToUah = res.rates.UAH);
  }

}
