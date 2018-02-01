import {Component, Inject, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

import { FlightsService } from '../../services/flights.service';
import { Flight } from '../../models/flight.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

import * as _moment from 'moment';
const moment =  _moment;

@Component({
  selector: 'app-flight-dialog',
  templateUrl: './flight-dialog.component.html',
  styleUrls: ['./flight-dialog.component.scss']
})
export class FlightDialogComponent {
  @ViewChild('flightForm') flightForm: NgForm;
  constructor(
    private flightsService: FlightsService,
    public dialogRef: MatDialogRef<FlightDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  onSubmit() {
    console.log(this.data)
    if(!this.flightForm.valid) {
      return
    }

    this.data.flight.date = this.flightForm.value.date._d;

    if(this.data.isBeingUpdated) {
      this.flightsService.updateFlight(this.data.flight);
    } else {
      this.flightsService.addFlight(this.data.flight)
    }
    this.dialogRef.close();
  }
}
