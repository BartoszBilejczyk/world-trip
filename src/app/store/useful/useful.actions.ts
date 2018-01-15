import { Action } from '@ngrx/store';

export const LOAD_VISAS = 'Visas loaded';
export const LOAD_VISAS_SUCCESS = 'Visas loaded success';

export const LOAD_VACCINATIONS = 'Vaccinations loaded';
export const LOAD_VACCINATIONS_SUCCESS = 'Vaccinations loaded success';

export const LOAD_EQUIPMENT = 'Equipment loaded';
export const LOAD_EQUIPMENT_SUCCESS = 'Equipment loaded success';

export class LoadVisas implements Action {
  readonly type: string = LOAD_VISAS;
  constructor(public payload: any) { }
}

export class LoadVisasSuccess implements Action {
  readonly type: string = LOAD_VISAS_SUCCESS;
  constructor(public payload: any) { }
}

export class LoadVaccinations implements Action {
  readonly type: string = LOAD_VACCINATIONS;
  constructor(public payload: any) { }
}

export class LoadVaccinationsSuccess implements Action {
  readonly type: string = LOAD_VACCINATIONS_SUCCESS;
  constructor(public payload: any) { }
}

export class LoadEquipment implements Action {
  readonly type: string = LOAD_EQUIPMENT;
  constructor(public payload: any) { }
}

export class LoadEquipmentSuccess implements Action {
  readonly type: string = LOAD_EQUIPMENT_SUCCESS;
  constructor(public payload: any) { }
}

export type actions =
    LoadVisas
  | LoadVisasSuccess
  | LoadVaccinations
  | LoadVaccinationsSuccess
  | LoadEquipment
  | LoadEquipmentSuccess
