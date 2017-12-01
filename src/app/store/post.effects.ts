import { Injectable }                 from '@angular/core';
import { Effect, Actions }            from '@ngrx/effects';
import { AngularFireDatabase }        from 'angularfire2/database';
import { Observable }                 from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import * as postActions from './post.actions';
export type Action = postActions.All;


@Injectable()

export class PostEffects {

  constructor(private actions: Actions, private db: AngularFireDatabase) {}

  @Effect()
  getPost: Observable<Action> = this.actions.ofType(postActions.GET_POST)
    .map((action: postActions.GetPost) => action.payload )
    .delay(2000) // delay to show spinner
    .switchMap(payload => this.db.object(payload).snapshotChanges()
    .map(action => {
      const $key = action.payload.key;
      const data = { $key, ...action.payload.val() };
      return data;
    })
    )
    .map(post => {
      post.pushKey = post.$key;
      return new postActions.GetPostSuccess(post);
    });
}
