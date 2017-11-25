import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { FlightsItemComponent } from './flights-item/flights-item.component';
import { AirlinesComponent } from './airlines/airlines.component';
import { AirlinesItemComponent } from './airlines/airlines-item/airlines-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FlightsComponent,
    FlightsItemComponent,
    AirlinesComponent,
    AirlinesItemComponent,
  ],
  exports: [
    FlightsComponent,
    FlightsItemComponent,
    AirlinesComponent,
    AirlinesItemComponent,
  ]
})
export class FlightsModule { }
