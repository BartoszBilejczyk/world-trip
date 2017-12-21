import { Component, OnInit, OnDestroy } from '@angular/core';
import { FlightsService } from '../services/flights.service';

import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { MatDialog } from '@angular/material';
import { FlightDialogComponent } from '../dialogs/flight-dialog/flight-dialog.component';
import { HandleSubscription } from '../helpers/handle-subscriptions';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent extends HandleSubscription implements OnInit, OnDestroy {
  private flightsCostChart: AmChart;
  flights;
  minCostTotal = 0;
  maxCostTotal = 0;
  luggageCostTotal = 0;
  airportToCityCostTotal = 0;
  durationTotal = 0;

  constructor(
    private AmCharts: AmChartsService,
    private flightsService: FlightsService,
    public dialog: MatDialog
  ) {
    super(null)
  }

  ngOnInit() {
    const sub = this.flightsService.getFlights().subscribe( flights => {
      this.flights = flights;

      this.calculateTotals();
      this.createCostChart();
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

  createCostChart() {
    this.flightsCostChart = this.AmCharts.makeChart( "flightCostChart", {
      "type": "pie",
      "theme": "none",
      "dataProvider": [
        {
          "title": "FlightCost",
          "value": this.maxCostTotal,
          "color": "#268298"
        },
        {
          "title": "Luggage Cost",
          "value": this.luggageCostTotal,
          "color": "#d3d7dc"
        },
        {
          "title": "Airport To City Cost",
          "value": this.airportToCityCostTotal,
          "color": "#d3d7dc"
        }
      ],
      "titleField": "title",
      "valueField": "value",
      "labelRadius": 5,
      "startDuration": 0,

      "radius": "30%",
      "innerRadius": "65%",
      "export": {
        "enabled": true
      }
    });
  }

}
