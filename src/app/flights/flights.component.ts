import {Component, OnInit, OnDestroy} from '@angular/core';
import { FlightsService } from "../services/flights.service";
import { Observable } from 'rxjs/Observable';

import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit, OnDestroy {
  private flightsCostChart: AmChart;
  // flightsObs: Observable<any>;
  // flights;
  // minCostTotal = 0;
  // maxCostTotal = 0;
  // luggageCostTotal = 0;
  // airportToCityCostTotal = 0;
  // durationTotal = 0;
  sub: any;

  constructor(
    private AmCharts: AmChartsService,
    private flightsService: FlightsService
  ) {
  }

  ngOnInit() {
    this.flightsService.getItems().subscribe( flights => {
      console.log(flights);
    })
  },

  //
  // createCostChart() {
  //   this.flightsCostChart = this.AmCharts.makeChart( "flightCostChart", {
  //     "type": "pie",
  //     "theme": "none",
  //     "dataProvider": [
  //       {
  //         "title": "FlightCost",
  //         "value": this.maxCostTotal,
  //         "color": "#268298"
  //       },
  //       {
  //         "title": "Luggage Cost",
  //         "value": this.luggageCostTotal,
  //         "color": "#d3d7dc"
  //       },
  //       {
  //         "title": "Airport To City Cost",
  //         "value": this.airportToCityCostTotal,
  //         "color": "#d3d7dc"
  //       }
  //     ],
  //     "titleField": "title",
  //     "valueField": "value",
  //     "labelRadius": 5,
  //     "startDuration": 0,
  //
  //     "radius": "30%",
  //     "innerRadius": "65%",
  //     "export": {
  //       "enabled": true
  //     }
  //   });
  // }

}
