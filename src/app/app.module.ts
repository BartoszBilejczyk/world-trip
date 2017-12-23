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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    FlightsService,
    TimelineService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
