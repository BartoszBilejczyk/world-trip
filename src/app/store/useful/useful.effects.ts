import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import * as usefulActions from './useful.actions';
import {UsefulService} from '../../services/useful.service';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class UsefulEffects {
  constructor(
    private actions$: Actions,
    private service: UsefulService
  ) {}

  @Effect()
  loadVisas$ = this.actions$
    .ofType(usefulActions.LOAD_VISAS)
    .map((action: usefulActions.LoadVisas) => action.payload)
    .switchMap(() => this.service.getVisas())
    .map((visas) => new usefulActions.LoadVisasSuccess(visas));

  @Effect()
  loadVaccinations$ = this.actions$
    .ofType(usefulActions.LOAD_VACCINATIONS)
    .map((action: usefulActions.LoadVaccinations) => action.payload)
    .switchMap(() => this.service.getVaccinations())
    .map((vaccinations) => new usefulActions.LoadVaccinationsSuccess(vaccinations));

  @Effect()
  loadEquipment$ = this.actions$
    .ofType(usefulActions.LOAD_EQUIPMENT)
    .map((action: usefulActions.LoadEquipment) => action.payload)
    .switchMap(() => this.service.getEquipment())
    .map((equipment) => new usefulActions.LoadEquipmentSuccess(equipment));
}
