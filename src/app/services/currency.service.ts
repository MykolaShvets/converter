import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  baseUrl = 'https://api.exchangerate.host/latest';

  constructor(private http: HttpClient) {}

  getRate(base: string, symbols: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + `?base=${base}&symbols=${symbols}`);
  };
}
