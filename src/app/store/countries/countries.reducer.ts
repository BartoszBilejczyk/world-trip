import * as countriesActions from './countries.actions';

const initialState: any = {
  countries: []
};

export function countriesReducer(state = initialState, action: countriesActions.actions) {
  switch (action.type) {
    case countriesActions.LOAD_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.payload
      };
    default:
      return state;
  }
}
