import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

import {Country} from '../../models/country.model';

@Injectable()
export class CountriesActions {

  static LOAD_COUNTRIES = 'LOAD_COUNTRIES';
  loadCountries(): Action {
    return {
      type: CountriesActions.LOAD_COUNTRIES
    };
  }

  static LOAD_COUNTRIES_SUCCESS = 'LOAD_COUNTRIES_SUCCESS';
  loadCountriesSuccess(countries: Country[]): Action {
    return {
      type: CountriesActions.LOAD_COUNTRIES_SUCCESS,
      payload: countries
    };
  }

}
