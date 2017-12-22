import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirbnbComponent } from './airbnb/airbnb.component';
import { CostsComponent } from './costs/costs.component';
import { CountryComponent } from './country/country.component';
import { FlightsComponent } from './flights/flights.component';
import { MapComponent } from './map/map.component';
import { TimelineListComponent } from './timeline/timeline-list/timeline-list.component';
import { UsefulInfoComponent } from './useful-info/useful-info.component';
import { JourneyDetailsComponent } from './timeline/journey-details/journey-details.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'airbnb', component: AirbnbComponent },
  { path: 'costs', component: CostsComponent },
  { path: 'country/:id', component: CountryComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'map', component: MapComponent },
  { path: 'timeline', component: TimelineListComponent },
  { path: 'journey/:journey', component: JourneyDetailsComponent },
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
