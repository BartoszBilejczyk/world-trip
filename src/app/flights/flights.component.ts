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
  flights = [];
  sub: any;

  constructor(private store: Store<AppStore>) {
    this.flightsObs = store.select(store => store.state.flights);
  }

  ngOnInit() {
    this.store.dispatch(new flightsActions.LoadFlights('/flights'));

    this.sub = this.flightsObs.subscribe(flights => {
      for(let o in flights) {
        this.flights.push(flights[o])
      }

      this.flights2 = Object.keys(flights).map(arg => flights[arg])
    });

  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }
 }
