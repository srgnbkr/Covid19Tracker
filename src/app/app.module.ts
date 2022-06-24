import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//Todo:Modüller şişmeye başladı... Help Neye göre kime göre...
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ChartModule} from 'primeng/chart';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { ChartInfoComponent } from './components/chart-info/chart-info.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { CountryCardInfoComponent } from './components/country-card-info/country-card-info.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    CardInfoComponent,
    ChartInfoComponent,
    CountryListComponent,
    FilterPipe,
    CountryCardInfoComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    PaginatorModule,
    MenubarModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    FieldsetModule,
    ProgressSpinnerModule,
    ChartModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
