import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import {AppStore} from '../app-store';
import * as countriesActions from '../actions/countries.actions';
import {CountriesService} from '../../services/countries.service';

@Injectable()
export class CountriesEffects {
  constructor (
    private actions$: Actions,
    private svc: CountriesService
  ) {}

  @Effect()
  loadCountries$ = this.actions$
    .ofType(countriesActions.LOAD_COUNTRIES)
    .map((action: countriesActions.LoadCountries) => action.payload )
    .switchMap(() => this.svc.getCountries())
    .map((countries) => {
      return new countriesActions.LoadCountriesSuccess(countries)
    });
}
