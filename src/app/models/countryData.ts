import { GlobalData } from './globalData';
export interface CountryData extends GlobalData {
    ID:string;
    Country: string;
    CountryCode: string;
    Date: Date;
    Slug: string
}
