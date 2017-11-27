import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirbnbComponent } from './airbnb/airbnb.component';
import { CostsComponent } from './costs/costs.component';
import { CountryComponent } from './countries/country/country.component';
import { FlightsComponent } from './flights/flights.component';
import { MapComponent } from './map/map.component';
import { TimelineComponent } from './timeline/timeline.component';
import { UsefulInfoComponent } from './useful-info/useful-info.component';
import { CountriesComponent } from "./countries/countries.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'airbnb', component: AirbnbComponent },
  { path: 'costs', component: CostsComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'country', component: CountryComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'map', component: MapComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'info', component: UsefulInfoComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
