import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppStore } from "../store/app-store";
import * as flightsActions from '../store/actions/flights.actions';

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
    this.flightsObs = store.select(store => store.state.flights);
    console.log(this.flightsObs)
  }

  ngOnInit() {
    this.sub = this.flightsObs.subscribe(flights => {
      console.log(flights);
      this.flights = flights
      console.log(this.flights);
    });
  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }

  loadFlights() {
    this.store.dispatch(new flightsActions.LoadFlights('/flights'));
    setTimeout(function(){ console.log(this.flights)
      console.log(typeof this.flights) }, 5000);

  }
}
