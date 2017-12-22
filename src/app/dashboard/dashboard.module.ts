import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../common/common.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { MapComponent } from '../map/map.component';
import { CostsComponent } from '../costs/costs.component';
import { AirbnbComponent } from '../airbnb/airbnb.component';

import { GeneralService } from '../services/general.service';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppCommonModule
  ],
  declarations: [
    DashboardComponent,
    TimelineComponent,
    MapComponent,
    CostsComponent,
    AirbnbComponent,
  ],
  exports: [
    DashboardComponent,
    TimelineComponent,
    MapComponent,
    CostsComponent,
    AirbnbComponent,
  ],
  providers: [
    GeneralService
  ]
})
export class DashboardModule { }
