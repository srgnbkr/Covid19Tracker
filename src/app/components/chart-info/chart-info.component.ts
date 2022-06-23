import { SummaryData } from 'src/app/models/summaryData';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-info',
  templateUrl: './chart-info.component.html',
  styleUrls: ['./chart-info.component.scss'],
})
export class ChartInfoComponent implements OnInit {
  basicData: any;
  summaryData!:SummaryData;
  number=this.summaryData.Global.NewDeaths;

  basicOptions: any;

  constructor(){}

  ngOnInit() {


  }









}



