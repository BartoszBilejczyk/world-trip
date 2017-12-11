import { Component, OnInit, Input } from '@angular/core';
import { FlightsService } from "../../services/flights.service";
import { Flight } from "../../models/flight.model";

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
  }

  deleteFlight(event, flight) {
    this.flightsService.deleteFlight(flight)
  }

  editFlight(event, item) {
    this.editState = !this.editState;
    this.flightToEdit = item;
  }

  updateFlight(flight) {
    this.flightsService.updateFlight(flight)
  }

}
