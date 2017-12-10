import { Country } from '../models/country.model';

import { countries, flights} from './reducers';

import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

export interface AppStore {
  countries: Country[];
  flights: any;
}

export default compose(combineReducers)({
  countries,
  flights,
});
