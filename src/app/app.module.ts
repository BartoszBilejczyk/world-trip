import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AmChartsModule } from "@amcharts/amcharts3-angular";

import { AppRoutingModule } from './app-routing.module';

import { UsefulInfoModule } from './useful-info/useful-info.module';
import { FlightsModule } from './flights/flights.module';
import { CountryModule } from './countries/country/country.module';
import { AppCommonModule } from './common/common.module';
import { DashboardModule } from "./dashboard/dashboard.module";
import { CountriesModule } from "./countries/countries.module";

import { AppComponent } from './app.component';

import { environment} from "../environments/environment";
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = environment.firebaseConfig;
import { AngularFireDatabaseModule } from "angularfire2/database";
import { CountriesComponent } from './countries/countries.component';


@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    UsefulInfoModule,
    FlightsModule,
    CountryModule,
    DashboardModule,
    AppCommonModule,
    AmChartsModule,
    CountriesModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
