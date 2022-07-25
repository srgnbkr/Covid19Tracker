import { CountryDataService } from './../../services/country-data.service';
import { CountryData } from './../../models/countryData';
import { SummaryData } from './../../models/summaryData';
import { GlobalDataService } from './../../services/global-data.service';
import { Component, OnInit } from '@angular/core';
import { CountryDetailData } from 'src/app/models/countryDetailData';

@Component({
  selector: 'app-country-card-info',
  templateUrl: './country-card-info.component.html',
  styleUrls: ['./country-card-info.component.scss'],
})
export class CountryCardInfoComponent implements OnInit {
  countryDetails: CountryDetailData;
  basicData;
  last10DayData;
  summaryData: SummaryData;
  dataLoaded = false;
  lastDays: Array<Date>;

  selectedCountry: CountryData;
  highlyConfirmedData: Array<CountryData>;
  chartLabel: Array<string>;

  chartConfirmedData: Array<number>;

  constructor(private dataService: GlobalDataService) {}

  ngOnInit(): void {
    this.getGlobalData();
  }

  getGlobalData() {
    this.dataService.getGlobalData().subscribe((response) => {
      this.summaryData = response;
      this.dataLoaded = true;
      this.getSortedData();


      this.chartLabel = this.highlyConfirmedData
        .map((a) => a.Country)
        .filter((value, index, self) => self.indexOf(value) === index);
      this.chartConfirmedData = this.highlyConfirmedData
        .map((a) => a.TotalConfirmed)
        .filter((value, index, self) => self.indexOf(value) === index);

      this.basicData = {
        labels: this.chartLabel,
        datasets: [
          {
            label: 'En Çok Vaka Görülen 10 Ülke',
            backgroundColor: [
              '#EC407A',
              '#AB47BC',
              '#42A5F5',
              '#7E57C2',
              '#66BB6A',
              '#FFCA28',
              '#26A69A',
            ],
            data: this.chartConfirmedData,
          },
        ],
      };
    });
  }

  getSortedData() {
    let data = JSON.parse(JSON.stringify(this.summaryData.Countries));
    this.highlyConfirmedData = data
      .sort((a, b) => b.TotalConfirmed - a.TotalConfirmed)
      .slice(0, 10);

  }
}
