import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currency-docket',
  templateUrl: './currency-docket.component.html',
  styleUrls: ['./currency-docket.component.css']
})
export class CurrencyDocketComponent implements OnInit, OnChanges {

  @Input() currencyList: any;
  @Output() changedCurrencyPreferedStatus = new EventEmitter<any>();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.currencyList.currentValue) {
      this.currencyList = changes.currencyList.currentValue;
    }
  }

  /**
   * Toggle Prefered/Unprefered currencies
   * @param currencyName Code Name of the currency
   * @param currentStatus current prefered or not
   */
  togglePreferedCurrency(currencyName: any, currentStatus: any) {
    this.changedCurrencyPreferedStatus.emit({currency_name: currencyName, new_status: !currentStatus});
  }

  /**
   * Navigate to currency conversion page
   * @param currencyName Currency Name/Code
   */
  navigateToConvertCurrency(currencyName: any) {
    this.router.navigate(['/convert-currency'], {queryParams:{primary_currency: currencyName}})
  }
}
