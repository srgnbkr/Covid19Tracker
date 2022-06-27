import { NewsInfoComponent } from './components/news-info/news-info.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:HomePageComponent},
  {path:'ülkeler',component:CountryListComponent},
  {path:'haberler',component:NewsInfoComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
