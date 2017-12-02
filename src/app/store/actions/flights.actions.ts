import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

export const LOAD_FLIGHTS           = 'Flights load';
export const LOAD_FLIGHTS_SUCCESS   = 'Flights load success';

@Injectable()

export class LoadFlights implements Action {
  readonly type: string = LOAD_FLIGHTS;
  constructor(public payload: any) { }
}

export class LoadFlightsSuccess implements Action {
  readonly type: string = LOAD_FLIGHTS_SUCCESS;
  constructor(public payload: any) { }
}

export type All =
  | LoadFlights
  | LoadFlightsSuccess
