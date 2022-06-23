import { CountryData } from './../../models/countryData';
import { SummaryData } from './../../models/summaryData';
import { GlobalDataService } from './../../services/global-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-card-info',
  templateUrl: './country-card-info.component.html',
  styleUrls: ['./country-card-info.component.scss'],
})
export class CountryCardInfoComponent implements OnInit {
  public basicData;
  summaryData: SummaryData;
  dataLoaded = false;
  selectedCountry: CountryData;
  highlyConfirmedData: Array<CountryData>;
  chartLabel: any;
  chartConfirmedData: any;

  constructor(private dataService: GlobalDataService) {}

  ngOnInit(): void {
    this.getGlobalData();
    this.chartShows();
  }

  getGlobalData() {
    this.dataService.getGlobalData().subscribe((response) => {
      this.summaryData = response;
      this.dataLoaded = true;
      this.getSortedData();
      //Chartta neden gösteremiyorum?Help nereye yazmalı?
      this.chartLabel = this.highlyConfirmedData.map((a) => a.CountryCode).filter((value, index, self) => self.indexOf(value) === index);
      this.chartConfirmedData = this.highlyConfirmedData.map((a) => a.TotalConfirmed).filter((value, index, self) => self.indexOf(value) === index);
      //TODO:Tekrar gözden geçir. Çalışıyor ama chartta neden görünmüyor...
      console.log(this.chartLabel);
      console.log(this.chartConfirmedData);
    });
  }

  getSortedData() {
    let data = JSON.parse(JSON.stringify(this.summaryData.Countries));
    this.highlyConfirmedData = data
      .sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)
      .slice(0, 10);
  }

  chartShows() {
    this.basicData = {
      labels: [this.chartLabel],
      datasets: [
        {
          label: 'En Çok Vaka Görülen 10 Ülke',
          backgroundColor: '#42A5F5',
          data: [this.chartConfirmedData],
        },
      ],
    };
  }
}
