import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import {AppStore} from '../app-store';
import {CountriesActions} from '../actions/countries.actions';
import {Country} from '../../models/country.model';
import {CountriesService} from '../../services/countries.service';

@Injectable()
export class CountriesEffects {
  constructor (
    private actions$: Actions,
    private countriesActions: CountriesActions,
    private svc: CountriesService
  ) {}

  @Effect()
  loadCountries$ = this.actions$
    .ofType(CountriesActions.LOAD_COUNTRIES)
    .switchMap(() => this.svc.getCountries())
    .map((countries: Country[]) => this.countriesActions.loadCountriesSuccess(countries))
}
