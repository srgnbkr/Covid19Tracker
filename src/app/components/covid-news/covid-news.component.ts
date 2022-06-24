import { CovidNewsService } from './../../services/covid-news.service';
import { CovidNewsData } from './../../models/covidNewsData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid-news',
  templateUrl: './covid-news.component.html',
  styleUrls: ['./covid-news.component.scss']
})
export class CovidNewsComponent implements OnInit {

  covidNews:CovidNewsData[];

  constructor(private covidNewsService:CovidNewsService) { }

  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews(){
    this.covidNewsService.getAllCovidNews().subscribe((response)=>{
      this.covidNews = response;
      console.log(response);
    })
  }

}
