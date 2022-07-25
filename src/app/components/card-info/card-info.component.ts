
import { CountryData } from './../../models/countryData';
import { SummaryData } from './../../models/summaryData';
import { GlobalDataService } from './../../services/global-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent implements OnInit {
  summaryData!: SummaryData;
  dataLoaded = false;


  constructor(private dataService: GlobalDataService) {}

  ngOnInit(): void {
    this.getGlobalData();
  }

  getGlobalData() {
    this.dataService.getGlobalData().subscribe((response) => {
      this.summaryData = response;
      this.dataLoaded = true;
    });
  }
}
