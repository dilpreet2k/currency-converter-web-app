import { Component, OnInit } from '@angular/core';
import { ExchangeRateService } from 'src/app/core/services/exchange-rate.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent implements OnInit {

  loadingList: any;
  allCurrencies: any = {};
  userPreferedCurrencies: any;
  constructor(private exchangeService: ExchangeRateService) {
    const fetchedUserPreferedCurrencies = localStorage.getItem("user_prefered_currencies");
    this.userPreferedCurrencies = fetchedUserPreferedCurrencies ?
      JSON.parse(fetchedUserPreferedCurrencies) : {};

    console.log(this.userPreferedCurrencies, ' constructor');
  }

  ngOnInit(): void {
    this.plotCurrencyList();
  }

  /**
   * Plot list of currencies
   */
  plotCurrencyList() {
    this.exchangeService.getCurrencyList().subscribe(response => {
      this.loadingList = false;
      if (response?.rates) {
        for (const currency in response.rates) {
          this.allCurrencies[currency] = this.userPreferedCurrencies.hasOwnProperty(currency);
        }
      }
    }, err => {
      this.loadingList = false;
    })
  }

  /**
   * Handle user prefered currencies change
   * @param event event emited from the child component of correlation docket
   */
  handleUserPrefChange(event: any) {
    if (event.new_status) {
      this.allCurrencies[event.currency_name] = this.userPreferedCurrencies[event.currency_name] = true;
    } else {
      this.allCurrencies[event.currency_name] = false;
      delete this.userPreferedCurrencies[event.currency_name];
    }

    // Set the latest value of user prefered currencies in local storage so that relaoding page won't 
    // user prefered currecnies.
    localStorage.setItem('user_prefered_currencies'
      , JSON.stringify(this.userPreferedCurrencies));
  }
}
