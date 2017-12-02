import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import {AppStore} from '../app-store';
import {FlightsActions} from '../actions/flights.actions';
import {FlightsService} from '../../services/flights.service'

@Injectable()
export class FlightsEffects {
  constructor (
    private actions$: Actions,
    private flightsActions: FlightsActions,
    private svc: FlightsService
  ) {}

  @Effect()
  loadFlights$ = this.actions$
    .ofType(FlightsActions.LOAD_FLIGHTS)
    .switchMap(() => this.svc.getFlights())
    .map((flights: any) => this.flightsActions.loadFlightsSuccess(flights))

}
