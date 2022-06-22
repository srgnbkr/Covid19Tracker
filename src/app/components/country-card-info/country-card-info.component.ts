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
  basicData: any;
  summaryData!: SummaryData;
  dataLoaded = false;
  selectedCountry!: CountryData;

  countryLabel: any;

  constructor(private dataService: GlobalDataService) {}

  ngOnInit(): void {


    this.basicData = {
      labels: ['Sergen'],
      datasets: [
        {
          label: 'Yeni Ölümler',
          backgroundColor: '#42A5F5',
          data: [this.selectedCountry?.NewConfirmed],
        },
      ],
    };

    this.getGlobalData();


  }

  getGlobalData() {
    this.dataService.getGlobalData().subscribe((response) => {
      this.summaryData = response;
      this.dataLoaded = true;
      console.log(this.countryLabel)
    });


  }
}
