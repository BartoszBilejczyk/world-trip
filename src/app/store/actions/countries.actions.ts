import {Action} from '@ngrx/store';

export const LOAD_COUNTRIES           = 'Countries load';
export const LOAD_COUNTRIES_SUCCESS   = 'Countries load success';

export class LoadCountries implements Action {
  readonly type: string = LOAD_COUNTRIES;
  constructor(public payload: any) { }
}

export class LoadCountriesSuccess implements Action {
  readonly type: string = LOAD_COUNTRIES_SUCCESS;
  constructor(public payload: any) { }
}

export type All =
  | LoadCountries
  | LoadCountriesSuccess
