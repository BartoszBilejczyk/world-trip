import { Observable } from 'rxjs/Observable';
import '../../rxjs-extensions';
import { Action } from '@ngrx/store';

import * as FlightsActions from '../actions/flights.actions';

export const flights = (state: any = [], action: Action) => {
  switch (action.type) {
    case FlightsActions.LOAD_FLIGHTS_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
