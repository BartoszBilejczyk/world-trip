import * as timelineActions from './timeline.actions';

const initialState: any = {
  timeline: []
};

export function timelineReducer(state = initialState, action: timelineActions.actions) {
  switch (action.type) {
    case timelineActions.LOAD_TIMELINE_SUCCESS:
      return {
        ...state,
        timeline: action.payload
      };
    default:
      return state;
  }
}
