import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import * as generalActions from './general.actions';
import {GeneralService} from '../../services/general.service';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class GeneralEffects {
  constructor(
    private actions$: Actions,
    private service: GeneralService
  ) {}

  @Effect()
  load$ = this.actions$
    .ofType(generalActions.LOAD_GENERAL)
    .map((action: generalActions.LoadGeneral) => action.payload)
    .switchMap(() => this.service.getGeneral())
    .map((general) => new generalActions.LoadGeneralSuccess(general));
}
