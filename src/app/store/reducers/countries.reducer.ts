import { Observable } from 'rxjs/Observable';
import '../../rxjs-extensions';
import {Action} from '@ngrx/store';

import { CountriesActions } from '../actions/countries.actions';
import { Country } from '../../models/country.model';

export const countries = (state: any = [], action: Action): Country[] => {
  switch (action.type) {
    case CountriesActions.LOAD_COUNTRIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
