import { CollectData } from './../../models/collectData';
import { CovidNewsData } from './../../models/covidNewsData';
import { CovidNewsService } from './../../services/covid-news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-info',
  templateUrl: './news-info.component.html',
  styleUrls: ['./news-info.component.scss'],
})
export class NewsInfoComponent implements OnInit {
  newsData: CollectData;
  responsiveOptions;
  dataLoaded=false;



  constructor(private newsService: CovidNewsService) {}

  ngOnInit(): void {
    this.getAllNews();

  }

  getAllNews() {
    this.newsService.getAllCovidNews().subscribe((response) => {
      this.newsData = response;
      this.dataLoaded = true;
    });

  }
}
