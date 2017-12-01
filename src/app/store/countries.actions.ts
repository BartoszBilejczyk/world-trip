import { Action } from '@ngrx/store';
import { Country } from '../models/country.model';

export const GET_COUNTRIES           = 'Country get';
export const GET_COUNTRIES_SUCCESS   = 'Country get success';

export class GetCountries implements Action {
  readonly type = GET_COUNTRIES;
  constructor(public payload: string) {}
}

export class GetCountriesSuccess implements Action {
  readonly type = GET_COUNTRIES_SUCCESS;
  constructor(public payload: Country) {}
}

export type All
  = GetCountries
  | GetCountriesSuccess
