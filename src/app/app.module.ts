import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

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

import { CountriesComponent } from './countries/countries.component';

// firebase

import { FlightsService } from './services';

import { environment} from "../environments/environment";
export const firebaseConfig = environment.firebaseConfig;

import { AngularFireModule }         from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppCommonModule,
    AppRoutingModule,
    UsefulInfoModule,
    FlightsModule,
    CountryModule,
    DashboardModule,
    AmChartsModule,
    CountriesModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    FlightsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
