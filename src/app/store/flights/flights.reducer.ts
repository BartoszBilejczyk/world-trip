import * as flightsActions from './flights.actions';

const initialState: any = {
  data: [],
  currentFlight: {}
};

export function flightsReducer(state = initialState, action: flightsActions.actions) {
  switch (action.type) {
    case flightsActions.LOAD_FLIGHTS_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
      case flightsActions.SET_CURRENT_FLIGHT:
      return {
        ...state,
        currentFlight: action.payload
      };
    default:
      return state;
  }
}
