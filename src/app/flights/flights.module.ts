import { NgModule } from '@angular/core';
import { AppCommonModule } from '../common/common.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightsComponent } from './flights.component';
import { FlightsItemComponent } from './flights-item/flights-item.component';
import { AirlinesComponent } from './airlines/airlines.component';
import { AirlinesItemComponent } from './airlines/airlines-item/airlines-item.component';
import { FlightsNavComponent } from './flights-nav/flights-nav.component';

import { MatButtonModule } from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  declarations: [
    FlightsComponent,
    FlightsItemComponent,
    AirlinesComponent,
    AirlinesItemComponent,
    FlightsNavComponent,
  ],
  exports: [
    FlightsComponent,
    FlightsItemComponent,
    AirlinesComponent,
    AirlinesItemComponent
  ]
})
export class FlightsModule { }
