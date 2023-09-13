import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http:HttpClient) { }



getCurrencyData(country1:string){

var url = 'https://api.exchangerate.host/latest?base=' + country1;
return this.http.get(url);
}



}
