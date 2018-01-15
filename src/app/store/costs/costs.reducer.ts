import * as costsActions from './costs.actions';

const initialState: any = {
  costs: []
};

export function costsReducer(state = initialState, action: costsActions.actions) {
  switch (action.type) {
    case costsActions.LOAD_COSTS_SUCCESS:
      return {
        ...state,
        costs: action.payload
      };
    default:
      return state;
  }
}
