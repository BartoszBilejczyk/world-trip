import { Component, OnInit, OnDestroy } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { CostsService } from "../services/costs.service";

import { HandleSubscription } from "../helpers/handle-subscriptions";
import {Store} from "@ngrx/store";
import * as flightsActions from '../store/flights/flights.actions';
import * as timelineActions from '../store/timeline/timeline.actions';
import * as usefulActions from '../store/useful/useful.actions';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.scss']
})
export class CostsComponent extends HandleSubscription implements OnInit, OnDestroy {
  flightsCosts = 0;
  airbnbCosts = 0;
  equipmentCosts = 0;
  visasCosts = 0;
  vaccinationsCosts = 0;
  usefulCosts = 0;



  constructor(
    private AmCharts: AmChartsService,
    private costsService: CostsService,
    private store: Store<any>
  ) {
    super(null);
  }

  ngOnInit() {
    this.calculateFlightsCosts();
    this.calculateAirbnbCosts();
    this.calculateEquipmentCosts();
    this.calculateVisasCosts();
    this.calculateVaccinationsCosts();

    if(this.flightsCosts === 0) {
      this.store.dispatch(new flightsActions.LoadFlights(''));
      this.store.dispatch(new timelineActions.LoadTimeline(''));
      this.store.dispatch(new usefulActions.LoadVisas(''));
      this.store.dispatch(new usefulActions.LoadVaccinations(''));
      this.store.dispatch(new usefulActions.LoadEquipment(''));
    }
  }

  calculateFlightsCosts() {
    const flightsSubscription = this.store.select('state', 'flights', 'data').subscribe( flight => {
      flight.forEach((item) => {
        // 100 is every flight luggage cost
        this.flightsCosts += +item.minCost + 100;
      })
    });
    this.subscriptions.push(flightsSubscription);
  }
  calculateAirbnbCosts() {
    const timelineSubscription = this.store.select('state', 'timeline', 'data').subscribe( journey => {
      journey.forEach((item) => {
        this.airbnbCosts += +item.pricePerNight;
      })
    });
    this.subscriptions.push(timelineSubscription);
  }
  calculateEquipmentCosts() {
    const equipmentSubscription = this.store.select('state', 'useful', 'equipment').subscribe( eqItem => {
      eqItem.forEach((item) => {
        this.equipmentCosts += +item.price;
      })
    });
    this.subscriptions.push(equipmentSubscription);
  }
  calculateVisasCosts() {
    const visasSubscription = this.store.select('state', 'useful', 'visas').subscribe( visa => {
      visa.forEach((item) => {
        this.visasCosts += +item.price;
      })
    });
    this.subscriptions.push(visasSubscription);
  }
  calculateVaccinationsCosts() {
    const vaccinationsSubscription = this.store.select('state', 'useful', 'vaccinations').subscribe( vaccination => {
      vaccination.forEach((item) => {
        this.vaccinationsCosts += +item.price;
      })
    });
    this.subscriptions.push(vaccinationsSubscription);
  }
}
