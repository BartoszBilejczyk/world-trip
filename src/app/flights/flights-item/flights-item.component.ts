import { Component, OnInit, Input } from '@angular/core';
import { FlightsService } from '../../services/flights.service';
import { Flight } from '../../models/flight.model';
import * as moment from 'moment';
import {FlightDialogComponent} from "../../dialogs/flight-dialog/flight-dialog.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-flights-item',
  templateUrl: './flights-item.component.html',
  styleUrls: ['./flights-item.component.scss']
})
export class FlightsItemComponent implements OnInit {
  @Input() flight: Flight;
  flightImage;

  constructor(
    private flightsService: FlightsService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.flight.date = moment(this.flight.date).format('dddd, LL');
    this.flightImage = `url('${this.flight.imageUrl}')`
  }

  deleteFlight(event, flight) {
    this.flightsService.deleteFlight(flight)
  }

  editFlight(event, flight) {
    const dialogRef = this.dialog.open(FlightDialogComponent, {
      data: {
        flight,
        isBeingUpdated: true
      }
    });
  }
}
