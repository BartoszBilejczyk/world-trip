import { Component, OnInit, OnDestroy } from '@angular/core';
import { FlightsService } from '../services/flights.service';

import { MatDialog } from '@angular/material';
import { FlightDialogComponent } from '../dialogs/flight-dialog/flight-dialog.component';
import { HandleSubscription } from '../helpers/handle-subscriptions';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent extends HandleSubscription implements OnInit, OnDestroy {
  flights;
  minCostTotal = 0;
  maxCostTotal = 0;
  luggageCostTotal = 0;
  airportToCityCostTotal = 0;
  durationTotal = 0;

  constructor(
    private flightsService: FlightsService,
    public dialog: MatDialog
  ) {
    super(null)
  }

  ngOnInit() {
    const sub = this.flightsService.getFlights().subscribe( flights => {
      this.flights = flights;

      this.calculateTotals();
    })

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
