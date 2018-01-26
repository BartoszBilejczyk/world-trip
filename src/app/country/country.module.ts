import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from "../common/common.module";

import { CountryRoutingModule } from './country-routing.module';

import { MatButtonModule } from '@angular/material';

import { CountryComponent } from './country.component';
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
    CountryMapComponent
  ],
  exports: [
    CountryComponent,
    CountryMapComponent
  ],
  providers: [
    CountriesService
  ]
})
export class CountryModule { }
