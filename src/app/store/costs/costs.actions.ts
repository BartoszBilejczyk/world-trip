import { Action } from '@ngrx/store';

export const LOAD_COSTS = 'Costs loaded';
export const LOAD_COSTS_SUCCESS = 'Costs loaded success';

export class LoadCosts implements Action {
  readonly type: string = LOAD_COSTS;
  constructor(public payload: any) { }
}

export class LoadCostsSuccess implements Action {
  readonly type: string = LOAD_COSTS_SUCCESS;
  constructor(public payload: any) { }
}

export type actions = LoadCosts | LoadCostsSuccess;
