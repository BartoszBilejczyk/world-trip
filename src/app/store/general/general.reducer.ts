import * as generalActions from './general.actions';

const initialState: any = {
  general: []
};

export function generalReducer(state = initialState, action: generalActions.actions) {
  switch (action.type) {
    case generalActions.LOAD_GENERAL_SUCCESS:
      return {
        ...state,
        general: action.payload
      };
    default:
      return state;
  }
}
