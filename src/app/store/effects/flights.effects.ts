import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import {AppStore} from '../app-store';
import * as flightsActions from '../actions/flights.actions';
import {FlightsService} from '../../services/flights.service'

@Injectable()
export class FlightsEffects {
  constructor (
    private actions$: Actions,
    private svc: FlightsService
  ) {}

  @Effect()
  loadFlights$ = this.actions$
    .ofType(flightsActions.LOAD_FLIGHTS)
    .map((action: flightsActions.LoadFlights) => action.payload )
    .switchMap(() => this.svc.getFlights())
    .map((flights) => {
      return new flightsActions.LoadFlightsSuccess(flights);
    });
}
