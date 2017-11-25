import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UsefulInfoModule } from './useful-info/useful-info.module';
import { FlightsModule } from './flights/flights.module';
import { CountryModule } from './country/country.module';
import { AppCommonModule } from './common/common.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './common/components/navigation/navigation.component';
import { TimelineComponent } from './timeline/timeline.component';
import { MapComponent } from './map/map.component';
import { CostsComponent } from './costs/costs.component';
import { AirbnbComponent } from './airbnb/airbnb.component';
import { TimelineItemComponent } from './timeline/timeline-item/timeline-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TimelineComponent,
    MapComponent,
    CostsComponent,
    AirbnbComponent,
    TimelineItemComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    UsefulInfoModule,
    FlightsModule,
    CountryModule,
    AppCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
