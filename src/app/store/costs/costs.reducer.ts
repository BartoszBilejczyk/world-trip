import * as costsActions from './costs.actions';

const initialState: any = {
  data: []
};

export function costsReducer(state = initialState, action: costsActions.actions) {
  switch (action.type) {
    case costsActions.LOAD_COSTS_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
