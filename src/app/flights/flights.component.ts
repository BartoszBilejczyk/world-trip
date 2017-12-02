import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppStore } from "../store/app-store";

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit, OnDestroy {
  flightsObs: Observable<any>;
  flights: string[];
  sub: any;

  constructor(private store: Store<AppStore>) {
    this.flightsObs = store.select(s => s.flights);
  }

  ngOnInit() {
    this.sub = this.flightsObs.subscribe(flights => this.flights = flights);
    console.log(this.flights)
  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }

}
