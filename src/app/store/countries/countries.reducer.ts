import * as timelineActions from './countries.actions';

const initialState: any = {
  timeline: []
};

export function timelineReducer(state = initialState, action: timelineActions.actions) {
  switch (action.type) {
    case timelineActions.LOAD_SITES_SUCCESS:
      return {
        ...state,
        timeline: action.payload
      };
    default:
      return state;
  }
}
