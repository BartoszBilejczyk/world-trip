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
    .delay(2000) // delay to show spinner
    .switchMap(payload => this.db.object(payload).snapshotChanges()
    .map(action => {
      const $key = action.payload.key;
      const data = { $key, ...action.payload.val() };
      console.log(typeof data)
      return data;
    })
    )
    .map(countries => {
      countries.pushKey = countries.$key;
      return new countryActions.GetCountriesSuccess(countries);
    });
}
