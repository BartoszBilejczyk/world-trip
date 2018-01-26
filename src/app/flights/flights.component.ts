import { Component, DoCheck, OnInit} from '@angular/core';

import { MatDialog } from '@angular/material';
import { FlightDialogComponent } from '../dialogs/flight-dialog/flight-dialog.component';
import { HandleSubscription } from '../helpers/handle-subscriptions';
import {Store} from "@ngrx/store";
import * as flightsActions from '../store/flights/flights.actions';
import {Flight} from "../models/flight.model";

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent extends HandleSubscription implements OnInit, DoCheck {
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

  ngDoCheck() {

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
    if (e.value) {
      this.imageUrl = `/assets/images/${e.target.children[0].children[1].children[0].children[0].children[1].children[0].children[3].children[1].innerText}.png`
    }
    this.store.dispatch(new flightsActions.SetCurrentFlight(flight));
  }

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
