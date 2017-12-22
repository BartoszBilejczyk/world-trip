import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './components/navigation/navigation.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule}  from '@angular/material/progress-spinner';


import { MatFormField, MatInput, MatButton, MatDatepicker, MatIcon, MatProgressSpinner, MatSpinner} from '@angular/material';

import { MatDialogModule } from '@angular/material/dialog';
import { FlightDialogComponent } from '../dialogs/flight-dialog/flight-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    NavigationComponent,
    FlightDialogComponent
  ],
  entryComponents: [
    FlightDialogComponent,
  ],
  exports: [
    NavigationComponent,
    MatFormField,
    MatInput,
    MatButton,
    MatDatepicker,
    MatIcon,
    MatProgressSpinner,
    MatSpinner
  ]
})
export class AppCommonModule { }
