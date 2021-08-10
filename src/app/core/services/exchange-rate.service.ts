import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

constructor(private httpService: HttpClient) { }

  /**
   * Returns observable for currency list api call
   */
  getCurrencyList (): Observable<any> {
    const url = `${environment.exchangeApiUrl}/latest`;
   return this.httpService.get(url);
  }

  /**
   * Returns observable for currency list api call
   */
   getConvertedCurrencyRates (dataObj: any): Observable<any> {

    const url = `${environment.exchangeApiUrl}/convert`;
   return this.httpService.get(url, {params: dataObj});
  }
}
