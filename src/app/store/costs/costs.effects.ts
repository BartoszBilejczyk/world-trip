import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import * as costsActions from './costs.actions';
import {CostsService} from '../../services/costs.service';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class CostsEffects {
  constructor(
    private actions$: Actions,
    private service: CostsService
  ) {}

  @Effect()
  load$ = this.actions$
    .ofType(costsActions.LOAD_COSTS)
    .map((action: costsActions.LoadCosts) => action.payload)
    .switchMap(() => this.service.getCosts())
    .map((costs) => new costsActions.LoadCostsSuccess(costs));
}
