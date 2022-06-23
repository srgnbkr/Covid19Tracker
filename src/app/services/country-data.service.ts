import { ListResponseModel } from './../models/listResponseModel';
import { CountryDetailData } from './../models/countryDetailData';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryDataService {

  constructor(private httpClient:HttpClient){}

  private url:string='https://api.covid19api.com/dayone/country/turkey'

  getCountryData():Observable<CountryDetailData[]>{
    return this.httpClient.get<CountryDetailData[]>(this.url).pipe((res)=>res);

  }

}
