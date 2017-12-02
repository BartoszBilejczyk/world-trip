import { Observable } from 'rxjs/Observable';
import '../../rxjs-extensions';
import {Action} from '@ngrx/store';

import * as CountriesActions from '../actions/countries.actions';

const initialState = {
  userData: {
    email: '',
    isAdvertiser: true,
    isAdmin: false
  }
};

export const countries = (state = initialState, action: Action) => {
  switch (action.type) {
    case CountriesActions.LOAD_COUNTRIES_SUCCESS:
      console.log('case')
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// export function postReducer(state: Post, action: Action) {
//   switch (action.type) {
//     case PostActions.GET_POST:
//       return { ...state, loading: true };
//     case PostActions.GET_POST_SUCCESS:
//       return { ...state, ...action.payload, loading: false };
//     case PostActions.VOTE_UPDATE:
//       return { ...state, ...action.payload, loading: true };
