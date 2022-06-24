import { CovidNewsData } from './../models/covidNewsData';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidNewsService {

  private url:string ='https://api.collectapi.com/corona/coronaNews'; //süresi doldu :(

  constructor(private httpClient:HttpClient) { }

  getAllCovidNews():Observable<CovidNewsData[]>{
    return this.httpClient.get<CovidNewsData[]>(this.url).pipe((res)=>res);

  }
}
