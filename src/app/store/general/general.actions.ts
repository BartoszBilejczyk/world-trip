import { Action } from '@ngrx/store';

export const LOAD_GENERAL = 'General loaded';
export const LOAD_GENERAL_SUCCESS = 'General loaded success';

export class LoadGeneral implements Action {
  readonly type: string = LOAD_GENERAL;
  constructor(public payload: any) { }
}

export class LoadGeneralSuccess implements Action {
  readonly type: string = LOAD_GENERAL_SUCCESS;
  constructor(public payload: any) { }
}

export type actions = LoadGeneral | LoadGeneralSuccess;
