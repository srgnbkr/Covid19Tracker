import { CollectData } from './../models/collectData';
import { CovidNewsData } from './../models/covidNewsData';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidNewsService {

  private url:string='https://api.collectapi.com/corona/coronaNews'

  constructor(private httpClient:HttpClient) { }

  getAllCovidNews():Observable<CollectData>{
    return this.httpClient.get<CollectData>(this.url).pipe((res)=>res);

  }


}
