import { Injectable }                 from '@angular/core';
import { Effect, Actions }            from '@ngrx/effects';
import { AngularFireDatabase }        from 'angularfire2/database';
import { Observable }                 from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import * as countryActions from './countries.actions';
export type Action = countryActions.All;


@Injectable()

export class CountryEffects {

  constructor(private actions: Actions, private db: AngularFireDatabase) {}

  @Effect()
  getCountry: Observable<Action> = this.actions.ofType(countryActions.GET_COUNTRIES)
    .map((action: countryActions.GetCountries) => action.payload )
    .switchMap(payload => this.db.object(payload).snapshotChanges()
    .map(countries => {
      console.log(countries)
      console.log(countries.payload.val())
      return new countryActions.GetCountriesSuccess(countries.payload.val());
    });
}
