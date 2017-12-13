import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FlightsService } from "../../services/flights.service";
import { Flight } from "../../models/flight.model";
import { MatDialogRef } from '@angular/material';

import * as _moment from 'moment';
const moment =  _moment;

@Component({
  selector: 'app-flight-dialog',
  templateUrl: './flight-dialog.component.html',
  styleUrls: ['./flight-dialog.component.scss']
})
export class FlightDialogComponent {
  @ViewChild('flightForm') flightForm: NgForm;

  flight: Flight = {
    date: '',
    from: '',
    to: '',
    minCost: null,
    maxCost: null,
    luggageCost: 0,
    airportToCityCost: 0,
    duration: 0,
    airline: '-'
  }

  constructor(
    private flightsService: FlightsService,
    public dialogRef: MatDialogRef<FlightDialogComponent>,
  ) { }

  onSubmit() {
    if(!this.flightForm.valid) {
      return
    }

    this.flight.date = moment(this.flightForm.value.date._d).format('L');
    this.flightsService.addFlight(this.flight)
    this.dialogRef.close();
  }

}
