import * as PostActions from './post.actions';
import { Post } from '../models/post.model';

export type Action = PostActions.All;

/// Reducer function
export function postReducer(state: Post, action: Action) {

  switch (action.type) {

    case PostActions.GET_POST:
      return { ...state, loading: true };

    case PostActions.GET_POST_SUCCESS:
      return { ...state, ...action.payload, loading: false };

    default:
      return state;
  }
}
