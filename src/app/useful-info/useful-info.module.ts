import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsefulInfoRoutingModule } from './useful-info-routing.module';

import { UsefulInfoComponent } from './useful-info.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { VisasComponent } from './visas/visas.component';
import { VisasItemComponent } from './visas/visas-item/visas-item.component';
import { VaccinationsComponent } from './vaccinations/vaccinations.component';
import { VaccinationsItemComponent } from './vaccinations/vaccinations-item/vaccinations-item.component';
import {UsefulService} from "../services/useful.service";

@NgModule({
  imports: [
    CommonModule,
    UsefulInfoRoutingModule
  ],
  declarations: [
    UsefulInfoComponent,
    EquipmentComponent,
    VisasComponent,
    VisasItemComponent,
    VaccinationsComponent,
    VaccinationsItemComponent
  ],
  exports: [
    UsefulInfoComponent,
    EquipmentComponent,
    VisasComponent,
    VisasItemComponent,
    VaccinationsComponent,
    VaccinationsItemComponent
  ],
  providers: [
    UsefulService
  ]
})
export class UsefulInfoModule { }
