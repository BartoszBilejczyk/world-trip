import * as countriesActions from './countries.actions';

const initialState: any = {
  data: []
};

export function countriesReducer(state = initialState, action: countriesActions.actions) {
  switch (action.type) {
    case countriesActions.LOAD_COUNTRIES_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
