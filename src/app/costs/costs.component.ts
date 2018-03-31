import { Component, OnInit, OnDestroy } from '@angular/core';

import { HandleSubscription } from "../helpers/handle-subscriptions";
import {Store} from "@ngrx/store";
import * as flightsActions from '../store/flights/flights.actions';
import * as timelineActions from '../store/timeline/timeline.actions';
import * as usefulActions from '../store/useful/useful.actions';
import {FlightsService} from "../services/flights.service";
import {TimelineService} from "../services/timeline.service";
import {UsefulService} from "../services/useful.service";

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.scss']
})
export class CostsComponent extends HandleSubscription implements OnInit, OnDestroy {
  flightsCosts = 1;
  airbnbCosts = 1;
  equipmentCosts = 1;
  visasCosts = 1;
  vaccinationsCosts = 1;
  doughnutChartLabels: string[] = ['Flights', 'Airbnb', 'Equipment', 'Visas', 'Vaccinations'];
  doughnutChartData: number[] = [];
  doughnutChartType: string = 'doughnut';

  constructor(
    private store: Store<any>,
    private flightsService: FlightsService,
    private airbnbService: TimelineService,
    private usefulService: UsefulService
  ) {
    super(null);
  }

  ngOnInit() {
    this.calculateFlightsCosts();
    this.calculateAirbnbCosts();
    this.calculateEquipmentCosts();
    this.calculateVisasCosts();
    this.calculateVaccinationsCosts();

    this.store.dispatch(new flightsActions.LoadFlights(''));
    this.store.dispatch(new timelineActions.LoadTimeline(''));
    this.store.dispatch(new usefulActions.LoadVisas(''));
    this.store.dispatch(new usefulActions.LoadVaccinations(''));
    this.store.dispatch(new usefulActions.LoadEquipment(''));
  }

  calculateFlightsCosts() {
    const flightsSubscription = this.flightsService.getFlights().subscribe( flight => {
      flight.forEach((item) => {
        // 100 is every flight luggage cost
        this.flightsCosts += +item.minCost + 100;
      })
      this.doughnutChartData.push(this.flightsCosts);
    });
    this.subscriptions.push(flightsSubscription);
  }
  calculateAirbnbCosts() {
    const timelineSubscription = this.airbnbService.getTimeline().subscribe( journey => {
      journey.forEach((item) => {
        this.airbnbCosts += +item.pricePerNight;
      })
      this.doughnutChartData.push(30000);
    });

    this.subscriptions.push(timelineSubscription);
  }
  calculateEquipmentCosts() {
    const equipmentSubscription = this.usefulService.getEquipment().subscribe( eqItem => {
      eqItem.forEach((item) => {
        this.equipmentCosts += +item.price;
      })
      this.doughnutChartData.push(this.equipmentCosts);
    });

    this.subscriptions.push(equipmentSubscription);
  }
  calculateVisasCosts() {
    const visasSubscription = this.usefulService.getVisas().subscribe( visa => {
      visa.forEach((item) => {
        this.visasCosts += +item.price;
      })
      this.doughnutChartData.push(this.visasCosts);
    });

    this.subscriptions.push(visasSubscription);
  }
  calculateVaccinationsCosts() {
    const vaccinationsSubscription = this.usefulService.getVaccinations().subscribe( vaccination => {
      vaccination.forEach((item) => {
        this.vaccinationsCosts += +item.price;
      })
      this.doughnutChartData.push(this.vaccinationsCosts);
      console.log(this.doughnutChartData)
    });
    this.subscriptions.push(vaccinationsSubscription);
  }

  // events
  chartClicked(e:any):void {
    console.log(e);
  }

  chartHovered(e:any):void {
    console.log(e);
  }
}
