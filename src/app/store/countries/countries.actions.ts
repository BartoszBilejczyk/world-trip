import { Action } from '@ngrx/store';

export const LOAD_COUNTRIES = 'Countries loaded';
export const LOAD_COUNTRIES_SUCCESS = 'Countries loaded success';

export class LoadCountries implements Action {
  readonly type: string = LOAD_COUNTRIES;
  constructor(public payload: any) { }
}

export class LoadCountriesSuccess implements Action {
  readonly type: string = LOAD_COUNTRIES_SUCCESS;
  constructor(public payload: any) { }
}

export type actions = LoadCountries | LoadCountriesSuccess;
