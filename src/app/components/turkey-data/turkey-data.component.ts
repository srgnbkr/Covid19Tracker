import { CountryDetailData } from 'src/app/models/countryDetailData';
import { CountryDataService } from './../../services/country-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turkey-data',
  templateUrl: './turkey-data.component.html',
  styleUrls: ['./turkey-data.component.scss'],
})
export class TurkeyDataComponent implements OnInit {
  countryDetailData: CountryDetailData[];
  highlyConfirmedLast100Days: CountryDetailData[];
  basicData;
  last7DaysDeaths: number;
  last7DaysConfirmed: number;
  basicOptions;
  chartLabel: string[];
  chartConfirmedData: number[];

  constructor(private countryDataService: CountryDataService) {}

  ngOnInit(): void {
    this.getData();
    this.applyLightTheme();
  }

  getData() {
    this.countryDataService.getCountryData().subscribe((response) => {
      this.countryDetailData = response;

      this.getSortedData();

    });
  }

  getSortedData() {
    let data = JSON.parse(JSON.stringify(this.countryDetailData));
    this.highlyConfirmedLast100Days = data
      .sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime())
      .slice(0, 100);
    this.chartLabel = this.highlyConfirmedLast100Days
      .map((a) => new Date(a.Date).toLocaleDateString().toString())
      .filter((value, index, self) => self.indexOf(value) === index);
    this.chartConfirmedData = this.highlyConfirmedLast100Days
      .map((a) => a.Confirmed)
      .filter((value, index, self) => self.indexOf(value) === index);

    this.basicData = {
      labels: this.chartLabel,
      datasets: [
        {
          label: 'Türkiye için son 100 Günlük Vaka Artış Grafiği',
          backgroundColor: ['#26A69A'],
          data: this.chartConfirmedData,
        },
      ],
    };
  }



  applyLightTheme() {
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
      },
    };
  }
}
