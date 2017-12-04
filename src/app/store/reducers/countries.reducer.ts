import { Observable } from 'rxjs/Observable';
import '../../rxjs-extensions';
import {Action} from '@ngrx/store';

import * as CountriesActions from '../actions/countries.actions';

export const countries = (state: any = [], action: Action) => {
  switch (action.type) {
    case CountriesActions.LOAD_COUNTRIES_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
