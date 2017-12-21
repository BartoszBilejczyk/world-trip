import { Component, OnInit } from '@angular/core';
import { AirbnbService } from '../services/airbnb.service';
import {HandleSubscription} from '../helpers/handle-subscriptions';

@Component({
  selector: 'app-airbnb',
  templateUrl: './airbnb.component.html',
  styleUrls: ['./airbnb.component.scss']
})
export class AirbnbComponent extends HandleSubscription implements OnInit {
  airbnb: any;

  constructor(private airbnbService: AirbnbService) {
    super(null);
  }

  ngOnInit() {
    const sub = this.airbnbService.getAirbnb().subscribe(airbnbItems => {
      this.airbnb = airbnbItems;
    })

    this.subscriptions.push(sub);
  }
}
