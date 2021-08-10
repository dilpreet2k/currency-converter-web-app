import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ExchangeRateService } from 'src/app/core/services/exchange-rate.service';

@Component({
  selector: 'app-currency-convert',
  templateUrl: './currency-convert.component.html',
  styleUrls: ['./currency-convert.component.css']
})
export class CurrencyConvertComponent implements OnInit {

  currencies: any;
  baseSelectedCurrency: { primary: string, secondary: string } = { primary: '', secondary: '' };
  currencyForm: FormGroup;

  constructor(private exchangeService: ExchangeRateService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.baseSelectedCurrency.primary = params['primary_currency'];
    });

    this.currencyForm = this.fb.group({
      'primary_currency_amount': [1, [Validators.required, Validators.min(0)]],
      'secondary_currency_amount': ['', Validators.min(0)]
    });
  }

  ngOnInit(): void {
    this.getAllCurrencies();
  }

  /**
   * Get List of all currencies available
   */
  getAllCurrencies() {
    this.exchangeService.getCurrencyList().subscribe(response => {
      this.currencies = response.rates;
    }, err => {
      this.openSnackBar('Unable to load currencies');
    });
  }

  /**
   * Handles currency selection by user
   * @param currencyName currency code/name
   */
  selectedCurrency(currencyName: any) {
    this.baseSelectedCurrency.secondary = currencyName;
  }

  /**
   * fetch conversion results
   * @param source source from where fetch currency conversion method is called
   */
  fetchLatestCurrencyData(source: string) {
    if (!this.currencyForm.valid || !this.baseSelectedCurrency?.primary || !this.baseSelectedCurrency?.secondary) {
      return;
    }

    let dataObj = {};

    // If secondary amount is changes, convert from secondary to primary and vice-versa
    (source === 'secondary') ?
      dataObj = {
        from: this.baseSelectedCurrency.secondary,
        to: this.baseSelectedCurrency.primary,
        amount: this.currencyForm.get('secondary_currency_amount')?.value
      } :
      dataObj = {
        from: this.baseSelectedCurrency.primary,
        to: this.baseSelectedCurrency.secondary,
        amount: this.currencyForm.get('primary_currency_amount')?.value
      };

    this.exchangeService.getConvertedCurrencyRates(dataObj).subscribe(response => {
      (source === 'secondary') ?
      this.currencyForm.get('primary_currency_amount')?.setValue(response.result):
      this.currencyForm.get('secondary_currency_amount')?.setValue(response.result);
    }, err => {
      console.log(err);
      // Open snackbar if error occurs
      this.openSnackBar('Something went wrong!')
    });
  }

  /**
   * Open Snack bar
   * @param message Message to be displayed in snackbar
   */
  openSnackBar(message: string) {
    this._snackBar.open(message, 'OK', {duration: 3000});
  }
}
