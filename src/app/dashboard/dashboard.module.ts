import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../common/common.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { MapComponent } from '../map/map.component';
import { CostsComponent } from '../costs/costs.component';

import { GeneralService } from '../services/general.service';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppCommonModule,
    ChartsModule
  ],
  declarations: [
    DashboardComponent,
    MapComponent,
    CostsComponent,
  ],
  exports: [
    DashboardComponent,
    MapComponent,
    CostsComponent,
  ],
  providers: [
    GeneralService
  ]
})
export class DashboardModule { }
