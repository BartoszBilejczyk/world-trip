import {Component, OnInit, OnDestroy} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppStore } from "../store/app-store";
import * as flightsActions from '../store/actions/flights.actions';

import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit, OnDestroy {
  private flightsCostChart: AmChart;
  flightsObs: Observable<any>;
  flights;
  minCostTotal = 0;
  maxCostTotal = 0;
  luggageCostTotal = 0;
  airportToCityCostTotal = 0;
  durationTotal = 0;
  sub: any;

  constructor(
    private store: Store<AppStore>,
    private AmCharts: AmChartsService
  ) {
    this.flightsObs = store.select(store => store.state.flights.flights);
  }

  ngOnInit() {
    this.store.dispatch(new flightsActions.LoadFlights('/flights'));

    setTimeout(() => {
      this.createCostChart()
    }, 2000)
  },


  calculateTotals() {
    this.flights.forEach(item => {
      this.minCostTotal += +item.minCost;
      this.maxCostTotal += +item.maxCost;
      this.luggageCostTotal += +item.luggageCost;
      this.airportToCityCostTotal += +item.airportToCityCost;
      this.durationTotal += +item.duration
    })
  },

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

  ngOnDestroy() {
    // if (this.xCostChart) {
    //   this.AmCharts.destroyChart(this.flightCostChart);
    // }
  }

}
