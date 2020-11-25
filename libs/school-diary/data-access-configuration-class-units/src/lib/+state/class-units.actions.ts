import { Action } from '@ngrx/store';

import { CreateClassUnitFailPayload } from '../payloads/create-class-unit-fail.payload';
import { CreateClassUnitRequestPayload } from '../request-payloads/create-class-unit.request-payload';
import { CreateClassUnitSuccessPayload } from '../payloads/create-class-unit-success.payload';
import { DeleteClassUnitFailPayload } from '../payloads/delete-class-unit-fail.payload';
import { DeleteClassUnitRequestPayload } from '../request-payloads/delete-class-unit.request-payload';
import { DeleteClassUnitSuccessPayload } from '../payloads/delete-class-unit-success.payload';
import { GetClassUnitsFailPayload } from '../payloads/get-class-units-fail.payload';
import { GetClassUnitsRequestPayload } from '../request-payloads/get-class-units.request-payload';
import { GetClassUnitsSuccessPayload } from '../payloads/get-class-units-success.payload';
import { SelectClassUnitPayload } from '../payloads/select-class-unit.payload';
import { UpdateClassUnitRequestPayload } from '../request-payloads/update-class-unit.request-payload';
import { UpdateClassUnitFailPayload } from '../payloads/update-class-unit-fail.payload';
import { UpdateClassUnitSuccessPayload } from '../payloads/update-class-unit-success.payload';

export namespace fromClassUnitsActions {
  export enum Types {
    CreateClassUnit = '[Class Units] Create Class Unit',
    CreateClassUnitFail = '[Class Units] Create Class Unit Fail',
    CreateClassUnitSuccess = '[Class Units] Create Class Unit Success',
    DeleteClassUnit = '[Class Units] Delete Class Unit',
    DeleteClassUnitFail = '[Class Units] Delete Class Unit Fail',
    DeleteClassUnitSuccess = '[Class Units] Delete Class Unit Success',
    GetClassUnits = '[Class Units] Get Class Units',
    GetClassUnitsFail = '[Class Units] Get Class Units Fail',
    GetClassUnitsSuccess = '[Class Units] Get Class Units Success',
    SelectClassUnit = '[Class Units] Select Class Unit',
    UnselectClassUnit = '[Class Units] Unselect Class Unit',
    UpdateClassUnit = '[Class Units] Update Class Unit',
    UpdateClassUnitFail = '[Class Units] Update Class Unit Fail',
    UpdateClassUnitSuccess = '[Class Units] Update Class Unit Success'
  }

  export class CreateClassUnit implements Action {
    readonly type = Types.CreateClassUnit;

    constructor(public payload: CreateClassUnitRequestPayload) {}
  }

  export class CreateClassUnitFail implements Action {
    readonly type = Types.CreateClassUnitFail;

    constructor(public payload: CreateClassUnitFailPayload) {}
  }

  export class CreateClassUnitSuccess implements Action {
    readonly type = Types.CreateClassUnitSuccess;

    constructor(public payload: CreateClassUnitSuccessPayload) {}
  }

  export class DeleteClassUnit implements Action {
    readonly type = Types.DeleteClassUnit;

    constructor(public payload: DeleteClassUnitRequestPayload) {}
  }

  export class DeleteClassUnitFail implements Action {
    readonly type = Types.DeleteClassUnitFail;

    constructor(public payload: DeleteClassUnitFailPayload) {}
  }

  export class DeleteClassUnitSuccess implements Action {
    readonly type = Types.DeleteClassUnitSuccess;

    constructor(public payload: DeleteClassUnitSuccessPayload) {}
  }

  export class GetClassUnits implements Action {
    readonly type = Types.GetClassUnits;

    constructor(public payload: GetClassUnitsRequestPayload) {}
  }

  export class GetClassUnitsFail implements Action {
    readonly type = Types.GetClassUnitsFail;

    constructor(public payload: GetClassUnitsFailPayload) {}
  }

  export class GetClassUnitsSuccess implements Action {
    readonly type = Types.GetClassUnitsSuccess;

    constructor(public payload: GetClassUnitsSuccessPayload) {}
  }

  export class SelectClassUnit implements Action {
    readonly type = Types.SelectClassUnit;

    constructor(public payload: SelectClassUnitPayload) {}
  }

  export class UnselectClassUnit implements Action {
    readonly type = Types.UnselectClassUnit;
  }

  export class UpdateClassUnit implements Action {
    readonly type = Types.UpdateClassUnit;

    constructor(public payload: UpdateClassUnitRequestPayload) {}
  }

  export class UpdateClassUnitFail implements Action {
    readonly type = Types.UpdateClassUnitFail;

    constructor(public payload: UpdateClassUnitFailPayload) {}
  }

  export class UpdateClassUnitSuccess implements Action {
    readonly type = Types.UpdateClassUnitSuccess;

    constructor(public payload: UpdateClassUnitSuccessPayload) {}
  }

  export type CollectiveType =
    | CreateClassUnit
    | CreateClassUnitFail
    | CreateClassUnitSuccess
    | DeleteClassUnit
    | DeleteClassUnitFail
    | DeleteClassUnitSuccess
    | GetClassUnits
    | GetClassUnitsFail
    | GetClassUnitsSuccess
    | SelectClassUnit
    | UnselectClassUnit
    | UpdateClassUnit
    | UpdateClassUnitFail
    | UpdateClassUnitSuccess
}
