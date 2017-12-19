import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppCommonModule} from "../common/common.module";

import { UsefulInfoRoutingModule } from './useful-info-routing.module';

import { UsefulInfoComponent } from './useful-info.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { VisasComponent } from './visas/visas.component';
import { VaccinationsComponent } from './vaccinations/vaccinations.component';
import {UsefulService} from "../services/useful.service";

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule
    UsefulInfoRoutingModule
  ],
  declarations: [
    UsefulInfoComponent,
    EquipmentComponent,
    VisasComponent,
    VaccinationsComponent,
  ],
  exports: [
    UsefulInfoComponent,
    EquipmentComponent,
    VisasComponent,
    VaccinationsComponent
  ],
  providers: [
    UsefulService
  ]
})
export class UsefulInfoModule { }
