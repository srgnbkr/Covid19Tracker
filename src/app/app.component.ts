import { SummaryData } from './models/summaryData';
import { GlobalData } from './models/globalData';
import { Component } from '@angular/core';
import { GlobalDataService } from './services/global-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ngOnInit(): void {}

  constructor() {}
}
