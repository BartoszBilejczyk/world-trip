import * as flightsActions from './flights.actions';

const initialState: any = {
  data: []
};

export function flightsReducer(state = initialState, action: flightsActions.actions) {
  switch (action.type) {
    case flightsActions.LOAD_FLIGHTS_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
