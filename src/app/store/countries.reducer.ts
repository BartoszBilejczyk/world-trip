import * as CountriesActions from './countries.actions';
import { storeClass } from "./store";

export type Action = CountriesActions.All;

const initialState = {
  userData: {
    isAdvertiser: true,
    isPublisher: true,
    isAdmin: false
  }
}

/// Reducer function
export function countriesReducer(state = initialState, action: Action) {

  switch (action.type) {

    case CountriesActions.GET_COUNTRIES:
      return { ...state };

    case CountriesActions.GET_COUNTRIES_SUCCESS:
      return { ...state, ...action.payload};

    default:
      return state;
  }
}
