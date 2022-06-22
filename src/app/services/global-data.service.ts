import { SummaryData } from './../models/summaryData';
import { SingleResponseModel } from './../models/singleResponseModel';
import { GlobalData } from './../models/globalData';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalDataService {
  private url: string = 'https://api.covid19api.com/summary';

  constructor(private httpClient: HttpClient) {}

  getGlobalData(): Observable<SummaryData> {
    return this.httpClient
      .get<SummaryData>(this.url).pipe((res)=>res);

  }



  // getCountriesData(): Observable<SummaryData[]> { //TODO: fix this
  //   return this.httpClient
  //     .get<SummaryData[]>(this.url).pipe((res)=>res);
  // }
}
