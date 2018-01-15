import { Component, OnInit, OnDestroy } from '@angular/core';
import { FlightsService } from '../services/flights.service';

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
export class FlightsComponent extends HandleSubscription implements OnInit, OnDestroy {
  flights: Flight[] = [];
  minCostTotal = 0;
  maxCostTotal = 0;
  luggageCostTotal = 0;
  airportToCityCostTotal = 0;
  durationTotal = 0;

  constructor(
    private flightsService: FlightsService,
    public dialog: MatDialog,
    private store: Store<any>
  ) {
    super(null)
  }

  ngOnInit() {
    const sub = this.store
      .select('state', 'flights', 'data')
      .subscribe( flights => {
        this.flights = flights;
        this.calculateTotals();
       })

    if(!this.flights.length) {
      this.store.dispatch(new flightsActions.LoadFlights(''));
    }

    this.subscriptions.push(sub);
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

}
