import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import * as countriesActions from './countries.actions';
import 'rxjs/add/operator/switchMap';
import {CountriesService} from "../../services/countries.service";

@Injectable()
export class CountriesEffects {
  constructor(
    private actions$: Actions,
    private service: CountriesService
  ) {}

  @Effect()
  load$ = this.actions$
    .ofType(countriesActions.LOAD_COUNTRIES)
    .map((action: countriesActions.LoadCountries) => action.payload)
    .switchMap(() => this.service.getCountries())
    .map((countries) => new countriesActions.LoadCountriesSuccess(countries));
}
