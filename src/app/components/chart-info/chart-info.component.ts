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
    this.basicData = {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [this.number, 50, 100],
              backgroundColor: [
                  "#42A5F5",
                  "#66BB6A",
                  "#FFA726"
              ],
              hoverBackgroundColor: [
                  "#64B5F6",
                  "#81C784",
                  "#FFB74D"
              ]
          }
      ]
  }









}
}


