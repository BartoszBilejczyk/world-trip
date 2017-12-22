import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from "../common/common.module";

import { CountryRoutingModule } from './country-routing.module';

import { MatButtonModule } from '@angular/material';

import { CountryComponent } from './country.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { LivingCostsComponent } from './living-costs/living-costs.component';
import { BudgetComponent } from './budget/budget.component';
import { SightseeingComponent } from './sightseeing/sightseeing.component';
import { CountryMapComponent } from './country-map/country-map.component';
import { CountriesService } from '../services/countries.service';

@NgModule({
  imports: [
    CommonModule,
    CountryRoutingModule,
    AppCommonModule,
    MatButtonModule
  ],
  declarations: [
    CountryComponent,
    BasicInfoComponent,
    LivingCostsComponent,
    BudgetComponent,
    SightseeingComponent,
    CountryMapComponent
  ],
  exports: [
    CountryComponent,
    BasicInfoComponent,
    LivingCostsComponent,
    BudgetComponent,
    SightseeingComponent,
    CountryMapComponent
  ],
  providers: [
    CountriesService
  ]
})
export class CountryModule { }
