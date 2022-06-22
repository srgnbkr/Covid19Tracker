import { CountryData } from './../../models/countryData';
import { Component, OnInit } from '@angular/core';
import { SummaryData } from 'src/app/models/summaryData';
import { GlobalDataService } from 'src/app/services/global-data.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  globalData!: SummaryData;
  selectedCounrty!: CountryData;
  filterText='';
  dataLoaded=false;
  constructor(private globalDataService: GlobalDataService) { }

  ngOnInit(): void {
    this.getGlobalData();
  }

  getGlobalData() {
    this.globalDataService.getGlobalData().subscribe((response) => {
      this.globalData = response;
      this.dataLoaded=true;
    });



  }

}
