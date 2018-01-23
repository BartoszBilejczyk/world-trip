import { combineReducers, ActionReducer } from '@ngrx/store/';
import {countriesReducer} from "./countries/countries.reducer";
import {flightsReducer} from "./flights/flights.reducer";
import {generalReducer} from "./general/general.reducer";
import {timelineReducer} from "./timeline/timeline.reducer";
import {usefulReducer} from "./useful/useful.reducer";


export interface ReducersState {
  countries: any;
  flights: any;
  general: any;
  timeline: any;
  useful: any;
};

export const reducers: ActionReducer<ReducersState> = combineReducers(
  {
    countries: countriesReducer,
    flights: flightsReducer,
    general: generalReducer,
    timeline: timelineReducer,
    useful: usefulReducer
  }
);
