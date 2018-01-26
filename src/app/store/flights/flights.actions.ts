import { Action } from '@ngrx/store';

export const LOAD_FLIGHTS = 'Flights loaded';
export const LOAD_FLIGHTS_SUCCESS = 'Flights loaded success';
export const SET_CURRENT_FLIGHT = 'Flight set';

export class LoadFlights implements Action {
  readonly type: string = LOAD_FLIGHTS;
  constructor(public payload: any) { }
}

export class LoadFlightsSuccess implements Action {
  readonly type: string = LOAD_FLIGHTS_SUCCESS;
  constructor(public payload: any) { }
}

export class SetCurrentFlight implements Action {
  readonly type: string = SET_CURRENT_FLIGHT;
  constructor(public payload: object) { }
}



export type actions = LoadFlights | LoadFlightsSuccess | SetCurrentFlight;
