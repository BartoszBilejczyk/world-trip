import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from "../common/common.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatDatepicker, MatDatepickerModule} from "@angular/material";
import { MatButtonModule } from "@angular/material";

import { MatDialogModule } from '@angular/material/dialog';
import { FlightDialogComponent } from '../dialogs/flight-dialog/flight-dialog.component';
import { VisaDialogComponent } from '../dialogs/visa-dialog/visa-dialog.component';
import { VaccinationDialogComponent } from '../dialogs/vaccination-dialog/vaccination-dialog.component';
import { EquipmentDialogComponent } from '../dialogs/equipment-dialog/equipment-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  declarations: [
    FlightDialogComponent,
    VisaDialogComponent,
    VaccinationDialogComponent,
    EquipmentDialogComponent,
  ],
  entryComponents: [
    FlightDialogComponent,
    VisaDialogComponent,
    VaccinationDialogComponent,
    EquipmentDialogComponent,
  ],
  exports: [
    MatDatepicker
  ]
})
export class DialogsModule { }
