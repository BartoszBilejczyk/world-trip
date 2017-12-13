import { Component, OnInit } from '@angular/core';
import { AirbnbService } from "../services/airbnb.service";

@Component({
  selector: 'app-airbnb',
  templateUrl: './airbnb.component.html',
  styleUrls: ['./airbnb.component.scss']
})
export class AirbnbComponent implements OnInit {
  airbnb: any;

  constructor(private airbnbService: AirbnbService) {}

  ngOnInit() {
    this.airbnbService.getAirbnb().subscribe(airbnbItems => {
      this.airbnb = airbnbItems;
    })
  }

}
