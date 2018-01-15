import * as flightsActions from './flights.actions';

const initialState: any = {
  flights: []
};

export function flightsReducer(state = initialState, action: flightsActions.actions) {
  switch (action.type) {
    case flightsActions.LOAD_FLIGHTS_SUCCESS:
      return {
        ...state,
        flights: action.payload
      };
    default:
      return state;
  }
}
