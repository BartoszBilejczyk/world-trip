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

import { FirebaseService } from "./firebase.service";
// store and firebase


import { environment} from "../environments/environment";
export const firebaseConfig = environment.firebaseConfig;

import { AngularFireModule }         from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { EffectsModule }             from '@ngrx/effects';
import { StoreModule }               from '@ngrx/store';
import { StoreDevtoolsModule }       from '@ngrx/store-devtools';
import { countriesReducer }          from './store/countries.reducer';

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
      state: countriesReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
