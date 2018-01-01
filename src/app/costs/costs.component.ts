import { Component, OnInit, OnDestroy } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { CostsService } from "../services/costs.service";

import { HandleSubscription } from "../helpers/handle-subscriptions";

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
    private costsService: CostsService
  ) {
    super(null);
  }

  ngOnInit() {
    this.calculateFlightsCosts();
    this.calculateAirbnbCosts();
    this.calculateEquipmentCosts();
    this.calculateVisasCosts();
    this.calculateVaccinationsCosts();
  }

  calculateFlightsCosts() {
    const flightsSubscription = this.costsService.getFLights().subscribe(async flight => {
      await flight.forEach((item) => {
        this.flightsCosts += +item.minCost;
      })
    });
    this.subscriptions.push(flightsSubscription);
  }
  calculateAirbnbCosts() {
    const timelineSubscription = this.costsService.getTimeline().subscribe(async journey => {
      await journey.forEach((item) => {
        this.airbnbCosts += +item.pricePerNight;
      })
    });
    this.subscriptions.push(timelineSubscription);
  }
  calculateEquipmentCosts() {
    const equipmentSubscription = this.costsService.getEquipment().subscribe(async eqItem => {
      await eqItem.forEach((item) => {
        this.equipmentCosts += +item.price;
      })
    });
    this.subscriptions.push(equipmentSubscription);
  }
  calculateVisasCosts() {
    const visasSubscription = this.costsService.getVisas().subscribe(async visa => {
      await visa.forEach((item) => {
        this.visasCosts += +item.price;
      })
    });
    this.subscriptions.push(visasSubscription);
  }
  calculateVaccinationsCosts() {
    const vaccinationsSubscription = this.costsService.getVaccinations().subscribe(async vaccination => {
      await vaccination.forEach((item) => {
        this.vaccinationsCosts += +item.price;
      })
    });
    this.subscriptions.push(vaccinationsSubscription);
  }
}
