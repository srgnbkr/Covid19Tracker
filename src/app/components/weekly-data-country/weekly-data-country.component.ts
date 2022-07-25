import { CountryDataService } from './../../services/country-data.service';
import { Component, OnInit } from '@angular/core';
import { CountryDetailData } from 'src/app/models/countryDetailData';

@Component({
  selector: 'app-weekly-data-country',
  templateUrl: './weekly-data-country.component.html',
  styleUrls: ['./weekly-data-country.component.scss'],
})
export class WeeklyDataCountryComponent implements OnInit {
  countryDetailData: CountryDetailData[];
  weeklyData: CountryDetailData[];
  last7DaysConfirmed: number;
  last7DaysDeaths: number;
  lastWeekDate:string;
  nowDate:string;
  sevenDaysAgoCofirmed:number;
  sevenDaysAgoDeath:number;
  nowConfirmed:number;
  nowDeaths:number;

  constructor(private countryDataService: CountryDataService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.countryDataService.getCountryData().subscribe((response) => {
      this.countryDetailData = response;
      this.getWeeklySortedData();
      this.getLast7DaysDataConfirmed();
      this.getLast7DaysDataDeaths();
      this.getDateForWeeks();
      this.getLastWeekDeaths();
      this.getNowDeaths();
      this.getLastWeekConfirmed();
      this.getNowConfirmed();
    });
  }

  getWeeklySortedData() {
    let data = JSON.parse(JSON.stringify(this.countryDetailData));
    this.weeklyData = data
      .sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime())
      .slice(0, 7);
      console.log(this.weeklyData);
  }

  getLast7DaysDataConfirmed() {
    this.last7DaysConfirmed =
      this.weeklyData[0].Confirmed - this.weeklyData[6].Confirmed;
  }

  getLast7DaysDataDeaths() {
    this.last7DaysDeaths =
      this.weeklyData[0].Deaths - this.weeklyData[6].Deaths;
  }

  getDateForWeeks(){
    this.lastWeekDate = new Date(this.weeklyData[6].Date).toLocaleDateString();
    this.nowDate = new Date(this.weeklyData[0].Date).toLocaleDateString();
  }

  getLastWeekDeaths(){
    this.sevenDaysAgoDeath = this.weeklyData[6].Deaths;
  }
  getNowDeaths(){
    this.nowDeaths = this.weeklyData[0].Deaths;
  }

  getNowConfirmed(){
    this.nowConfirmed = this.weeklyData[0].Confirmed;
  }


  getLastWeekConfirmed(){
    this.sevenDaysAgoCofirmed = this.weeklyData[6].Confirmed;
  }


}
