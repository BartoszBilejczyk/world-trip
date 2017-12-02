import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

@Injectable()
export class FlightsActions {

  static LOAD_FLIGHTS = 'LOAD_FLIGHTS';
  loadFlights(): Action {
    return {
      type: FlightsActions.LOAD_FLIGHTS
    };
  }

  static LOAD_FLIGHTS_SUCCESS = 'LOAD_FLIGHTS_SUCCESS';
  loadFlightsSuccess(flights: string[]): Action {
    return {
      type: FlightsActions.LOAD_FLIGHTS_SUCCESS,
      payload: flights
    };
  }

}
