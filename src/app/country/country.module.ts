import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';

import { CountryComponent } from './country.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { LivingCostsComponent } from './living-costs/living-costs.component';
import { BudgetComponent } from './budget/budget.component';
import { SightseeingComponent } from './sightseeing/sightseeing.component';
import { CountryMapComponent } from './country-map/country-map.component';

@NgModule({
  imports: [
    CommonModule,
    CountryRoutingModule
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
  ]
})
export class CountryModule { }
