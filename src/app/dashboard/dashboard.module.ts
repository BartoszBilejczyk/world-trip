import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { MapComponent } from '../map/map.component';
import { CostsComponent } from '../costs/costs.component';
import { AirbnbComponent } from '../airbnb/airbnb.component';
import { TimelineItemComponent } from '../timeline/timeline-item/timeline-item.component';
import { GeneralService } from "../services/general.service";


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    TimelineComponent,
    MapComponent,
    CostsComponent,
    AirbnbComponent,
    TimelineItemComponent
  ],
  exports: [
    DashboardComponent,
    TimelineComponent,
    MapComponent,
    CostsComponent,
    AirbnbComponent,
    TimelineItemComponent
  ],
  providers: [
    GeneralService
  ]
})
export class DashboardModule { }
