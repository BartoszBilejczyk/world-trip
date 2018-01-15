import { Action } from '@ngrx/store';

export const LOAD_FLIGHTS = 'Flights loaded';
export const LOAD_FLIGHTS_SUCCESS = 'Flights loaded success';

export class LoadFlights implements Action {
  readonly type: string = LOAD_FLIGHTS;
  constructor(public payload: any) { }
}

export class LoadFlightsSuccess implements Action {
  readonly type: string = LOAD_FLIGHTS_SUCCESS;
  constructor(public payload: any) { }
}

export type actions = LoadFlights | LoadFlightsSuccess;
