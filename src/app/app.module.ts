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

import { CountriesComponent } from './countries/countries.component';

// store and firebase

import { CountriesService, FlightsService } from './services';

import {CountriesEffects, FlightsEffects} from './store/effects';

import { environment} from "../environments/environment";
export const firebaseConfig = environment.firebaseConfig;

import { AngularFireModule }         from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { EffectsModule }             from '@ngrx/effects';
import { StoreModule }               from '@ngrx/store';
import { StoreDevtoolsModule }       from '@ngrx/store-devtools';
import { default as state } from './store/app-store';

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
    AngularFireDatabaseModule,
    StoreModule.forRoot({
      state
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot([CountriesEffects]),
    EffectsModule.forRoot([FlightsEffects])
  ],
  providers: [
    CountriesService,
    FlightsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
