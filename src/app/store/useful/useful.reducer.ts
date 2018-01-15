import * as usefulActions from './useful.actions';

const initialState: any = {
  visas: [],
  vaccinations: [],
  equipment: []
};

export function usefulReducer(state = initialState, action: usefulActions.actions) {
  switch (action.type) {
    case usefulActions.LOAD_VISAS_SUCCESS:
      return {
        ...state,
        visas: action.payload
      };
    case usefulActions.LOAD_VACCINATIONS_SUCCESS:
      return {
        ...state,
        vaccinations: action.payload
      };
    case usefulActions.LOAD_EQUIPMENT_SUCCESS:
      return {
        ...state,
        equipment: action.payload
      };
    default:
      return state;
  }
}
