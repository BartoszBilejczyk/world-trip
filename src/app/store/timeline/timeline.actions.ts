import { Action } from '@ngrx/store';

export const LOAD_TIMELINE = 'Timeline loaded';
export const LOAD_TIMELINE_SUCCESS = 'Timeline loaded success';

export class LoadTimeline implements Action {
  readonly type: string = LOAD_TIMELINE;
  constructor(public payload: any) { }
}

export class LoadTimelineSuccess implements Action {
  readonly type: string = LOAD_TIMELINE_SUCCESS;
  constructor(public payload: any) { }
}

export type actions = LoadTimeline | LoadTimelineSuccess;
