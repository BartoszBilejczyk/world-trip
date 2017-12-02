import { Observable } from 'rxjs/Observable';
import '../../rxjs-extensions';
import { Action } from '@ngrx/store';

import { FlightsActions } from '../actions/flights.actions';

export const flights = (state: any = [], action: Action): string[] => {
  switch (action.type) {
    case FlightsActions.LOAD_FLIGHTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
