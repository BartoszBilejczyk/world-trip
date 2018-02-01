import { Component, OnInit} from '@angular/core';

import { MatDialog } from '@angular/material';
import { FlightDialogComponent } from '../dialogs/flight-dialog/flight-dialog.component';
import { HandleSubscription } from '../helpers/handle-subscriptions';
import {Store} from "@ngrx/store";
import * as flightsActions from '../store/flights/flights.actions';
import * as timelineActions from '../store/timeline/timeline.actions';
import {Flight} from "../models/flight.model";

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent extends HandleSubscription implements OnInit {
  flights: Flight[] = [];
  minCostTotal = 0;
  maxCostTotal = 0;
  luggageCostTotal = 0;
  airportToCityCostTotal = 0;
  durationTotal = 0;
  test = 200;
  imageUrl: string;
  currentColor: string;
  currentFlight: Flight;
  currentFlightImage: string;

  constructor(
    public dialog: MatDialog,
    private store: Store<any>,
  ) {
    super(null)
  }

  ngOnInit() {
    const flightsSubscription = this.store
      .select('state', 'flights', 'data')
      .subscribe( flights => {
        this.flights = flights;
        this.calculateTotals();
       })


    if(!this.flights.length) {
      this.store.dispatch(new flightsActions.LoadFlights(''));
      this.store.dispatch(new timelineActions.LoadTimeline(''));
    }

    this.subscriptions.push(flightsSubscription);

    const airlineColorSubscription = this.store
      .select('state', 'flights', 'currentFlight')
      .subscribe( currentFlight => {
        console.log('asd')
        this.currentFlight = currentFlight;
        this.currentColor = this.setColor();
      })
    this.subscriptions.push(airlineColorSubscription);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FlightDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  calculateTotals() {
    this.flights.forEach(item => {
      this.minCostTotal += +item.minCost;
      this.maxCostTotal += +item.maxCost;
      this.luggageCostTotal += +item.luggageCost;
      this.airportToCityCostTotal += +item.airportToCityCost;
      this.durationTotal += +item.duration
    })
  }

  action(e, flight) {
    console.log(e)
    console.log(flight)
    if (e.value) {
      this.store.dispatch(new flightsActions.SetCurrentFlight(flight));
      this.imageUrl = `/assets/images/${this.currentFlight.airline}.png`
      console.log(this.imageUrl);
      this.currentFlightImage = `url('http://static.superiorwallpapers.com/images/lthumbs/2015-07/10259_Dubai-Dream-city-from-the-United-Arab-Emirates.jpg')`
      console.log(this.currentFlightImage)
    }}

  setColor() {
    switch (this.currentFlight.airline) {
      case 'Ryanair':
        return '#0c388E';
      case 'Lot':
        return 'white';
      case 'Air China':
        return 'white';
      case 'Lufthansa':
        return '#ffb300';
    }
  }
}
