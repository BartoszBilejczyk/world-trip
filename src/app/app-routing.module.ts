import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CostsComponent } from './costs/costs.component';
import { CountryComponent } from './country/country.component';
import { FlightsComponent } from './flights/flights.component';
import { MapComponent } from './map/map.component';
import { TimelineComponent } from './timeline/timeline.component';
import { UsefulInfoComponent } from './useful-info/useful-info.component';
import { JourneyDetailsComponent } from './timeline/journey-details/journey-details.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'costs', component: CostsComponent },
  { path: 'country/:id', component: CountryComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'map', component: MapComponent },
  { path: 'timeline', component: TimelineComponent },
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
