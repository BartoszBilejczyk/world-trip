import * as CountriesActions from './countries.actions';
import { Country } from '../models/country.model';

export type Action = CountriesActions.All;

/// Reducer function
export function countriesReducer(state: Country, action: Action) {

  switch (action.type) {

    case CountriesActions.GET_COUNTRIES:
      return { ...state, loading: true };

    case CountriesActions.GET_COUNTRIES_SUCCESS:
      return { ...state, ...action.payload, loading: false };

    default:
      return state;
  }
}
