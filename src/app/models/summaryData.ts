import { CountryData } from './countryData';
import { GlobalData } from './globalData';
export interface SummaryData {
  Date: Date;
  Global: GlobalData;
  Countries: Array<CountryData>;
}
