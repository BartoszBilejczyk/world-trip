import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import * as flightsActions from './flights.actions';
import {FlightsService} from '../../services/flights.service';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class FlightsEffects {
  constructor(
    private actions$: Actions,
    private service: FlightsService
  ) {}

  @Effect()
  load$ = this.actions$
    .ofType(flightsActions.LOAD_FLIGHTS)
    .map((action: flightsActions.LoadFlights) => action.payload)
    .switchMap(() => this.service.getFlights())
    .map((flights) => new flightsActions.LoadFlightsSuccess(flights));
}
