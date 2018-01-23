import { Component, OnInit, Input } from '@angular/core';
import { FlightsService } from '../../services/flights.service';
import { Flight } from '../../models/flight.model';
import * as moment from 'moment';

@Component({
  selector: 'app-flights-item',
  templateUrl: './flights-item.component.html',
  styleUrls: ['./flights-item.component.scss']
})
export class FlightsItemComponent implements OnInit {
  @Input() flight: Flight;
  editState: boolean = false;
  flightToEdit: Flight;


  constructor(private flightsService: FlightsService) { }

  ngOnInit() {
    this.flight.date = moment(this.flight.date).format('dddd, LL');
  }

  deleteFlight(event, flight) {
    this.flightsService.deleteFlight(flight)
  }

  updateFlight(flight) {
    this.flightsService.updateFlight(flight)
  }

  editFlight(event, item) {
    this.editState = !this.editState;
    this.flightToEdit = item;
  }

}
