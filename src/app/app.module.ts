import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { AmChartsModule } from '@amcharts/amcharts3-angular';

import { AppRoutingModule } from './app-routing.module';

import { UsefulInfoModule } from './useful-info/useful-info.module';
import { FlightsModule } from './flights/flights.module';
import { CountryModule } from './country/country.module';
import { AppCommonModule } from './common/common.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { TimelineModule } from './timeline/timeline.module';

import { AppComponent } from './app.component';

import { DialogsModule } from "./dialogs/dialogs.module";

// firebase

import { FlightsService } from './services';

import { environment} from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

import { AngularFireModule }         from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { TimelineService} from './services/timeline.service';
import {CostsService} from "./services/costs.service";

// ngrx
import {StoreModule} from "@ngrx/store";
import {timelineReducer} from "./store/timeline/timeline.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {TimelineEffects} from "./store/timeline/timeline.effects";
import {UsefulEffects} from "./store/useful/useful.effects";
import {GeneralEffects} from "./store/general/general.effects";
import {FlightsEffects} from "./store/flights/flights.effects";
import {CountriesEffects} from "./store/countries/countries.effects";
import {CostsEffects} from "./store/costs/costs.effects";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppCommonModule,
    AppRoutingModule,
    DialogsModule,
    UsefulInfoModule,
    FlightsModule,
    CountryModule,
    DashboardModule,
    TimelineModule,
    AmChartsModule,
    StoreModule.forRoot({
      state: timelineReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    EffectsModule.forRoot([
      TimelineEffects,
      CostsEffects,
      CountriesEffects,
      FlightsEffects,
      GeneralEffects,
      UsefulEffects
    ]),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    FlightsService,
    TimelineService,
    CostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
