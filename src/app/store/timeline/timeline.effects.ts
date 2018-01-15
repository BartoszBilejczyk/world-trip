import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import * as timelineActions from './timeline.actions';
import { TimelineService } from '../../services/timeline.service';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class timelineEffects {
  constructor(
    private actions$: Actions,
    private service: TimelineService
  ) {}

  @Effect()
  load$ = this.actions$
    .ofType(timelineActions.LOAD_SITES)
    .map((action: timelineActions.LoadSites) => action.payload)
    .switchMap(() => this.service.getTimeline())
    .map((sites) => new timelineActions.LoadSitesSuccess(sites));
}
