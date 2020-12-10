import { Action } from '@ngrx/store';

import { CreateLessonHourFailPayload } from '../payloads/create-lesson-hour-fail.payload';
import { CreateLessonHourRequestPayload } from '../request-payloads/create-lesson-hour.request-payload';
import { CreateLessonHourSuccessPayload } from '../payloads/create-lesson-hour-success.payload';
import { DeleteLessonHourFailPayload } from '../payloads/delete-lesson-hour-fail.payload';
import { DeleteLessonHourRequestPayload } from '../request-payloads/delete-lesson-hour.request-payload';
import { DeleteLessonHourSuccessPayload } from '../payloads/delete-lesson-hour-success.payload';
import { GetLessonHourFailPayload } from '../payloads/get-lesson-hour-fail.payload';
import { GetLessonHourRequestPayload } from '../request-payloads/get-lesson-hour.request-payload';
import { GetLessonHourSuccessPayload } from '../payloads/get-lesson-hour-success.payload';
import { GetLessonHoursFailPayload } from '../payloads/get-lesson-hours-fail.payload';
import { GetLessonHoursRequestPayload } from '../request-payloads/get-lesson-hours.request-payload';
import { GetLessonHoursSuccessPayload } from '../payloads/get-lesson-hours-success.payload';
import { UpdateLessonHourRequestPayload } from '../request-payloads/update-lesson-hour.request-payload';
import { UpdateLessonHourFailPayload } from '../payloads/update-lesson-hour-fail.payload';
import { UpdateLessonHourSuccessPayload } from '../payloads/update-lesson-hour-success.payload';

export namespace fromLessonHoursActions {
  export enum Types {
    CreateLessonHour = '[Lesson Hours] Create Lesson Hour',
    CreateLessonHourFail = '[Lesson Hours] Create Lesson Hour Fail',
    CreateLessonHourSuccess = '[Lesson Hours] Create Lesson Hour Success',
    DeleteLessonHour = '[Lesson Hours] Delete Lesson Hour',
    DeleteLessonHourFail = '[Lesson Hours] Delete Lesson Hour Fail',
    DeleteLessonHourSuccess = '[Lesson Hours] Delete Lesson Hour Success',
    GetLessonHour = '[Lesson Hours] Get Lesson Hour',
    GetLessonHourFail = '[Lesson Hours] Get Lesson Hour Fail',
    GetLessonHourSuccess = '[Lesson Hours] Get Lesson Hour Success',
    GetLessonHours = '[Lesson Hours] Get Lesson Hours',
    GetLessonHoursFail = '[Lesson Hours] Get Lesson Hours Fail',
    GetLessonHoursSuccess = '[Lesson Hours] Get Lesson Hours Success',
    SelectLessonHour = '[Lesson Hours] Select Lesson Hour',
    UnselectLessonHour = '[Lesson Hours] Unselect Lesson Hour',
    UpdateLessonHour = '[Lesson Hours] Update Lesson Hour',
    UpdateLessonHourFail = '[Lesson Hours] Update Lesson Hour Fail',
    UpdateLessonHourSuccess = '[Lesson Hours] Update Lesson Hour Success'
  }

  export class CreateLessonHour implements Action {
    readonly type = Types.CreateLessonHour;

    constructor(public payload: CreateLessonHourRequestPayload) {}
  }

  export class CreateLessonHourFail implements Action {
    readonly type = Types.CreateLessonHourFail;

    constructor(public payload: CreateLessonHourFailPayload) {}
  }

  export class CreateLessonHourSuccess implements Action {
    readonly type = Types.CreateLessonHourSuccess;

    constructor(public payload: CreateLessonHourSuccessPayload) {}
  }

  export class DeleteLessonHour implements Action {
    readonly type = Types.DeleteLessonHour;

    constructor(public payload: DeleteLessonHourRequestPayload) {}
  }

  export class DeleteLessonHourFail implements Action {
    readonly type = Types.DeleteLessonHourFail;

    constructor(public payload: DeleteLessonHourFailPayload) {}
  }

  export class DeleteLessonHourSuccess implements Action {
    readonly type = Types.DeleteLessonHourSuccess;

    constructor(public payload: DeleteLessonHourSuccessPayload) {}
  }

  export class GetLessonHour implements Action {
    readonly type = Types.GetLessonHour;

    constructor(public payload: GetLessonHourRequestPayload) {}
  }

  export class GetLessonHourFail implements Action {
    readonly type = Types.GetLessonHourFail;

    constructor(public payload: GetLessonHourFailPayload) {}
  }

  export class GetLessonHourSuccess implements Action {
    readonly type = Types.GetLessonHourSuccess;

    constructor(public payload: GetLessonHourSuccessPayload) {}
  }

  export class GetLessonHours implements Action {
    readonly type = Types.GetLessonHours;

    constructor(public payload: GetLessonHoursRequestPayload) {}
  }

  export class GetLessonHoursFail implements Action {
    readonly type = Types.GetLessonHoursFail;

    constructor(public payload: GetLessonHoursFailPayload) {}
  }

  export class GetLessonHoursSuccess implements Action {
    readonly type = Types.GetLessonHoursSuccess;

    constructor(public payload: GetLessonHoursSuccessPayload) {}
  }

  export class UpdateLessonHour implements Action {
    readonly type = Types.UpdateLessonHour;

    constructor(public payload: UpdateLessonHourRequestPayload) {}
  }

  export class UpdateLessonHourFail implements Action {
    readonly type = Types.UpdateLessonHourFail;

    constructor(public payload: UpdateLessonHourFailPayload) {}
  }

  export class UpdateLessonHourSuccess implements Action {
    readonly type = Types.UpdateLessonHourSuccess;

    constructor(public payload: UpdateLessonHourSuccessPayload) {}
  }

  export type CollectiveType =
    | CreateLessonHour
    | CreateLessonHourFail
    | CreateLessonHourSuccess
    | DeleteLessonHour
    | DeleteLessonHourFail
    | DeleteLessonHourSuccess
    | GetLessonHour
    | GetLessonHourFail
    | GetLessonHourSuccess
    | GetLessonHours
    | GetLessonHoursFail
    | GetLessonHoursSuccess
    | UpdateLessonHour
    | UpdateLessonHourFail
    | UpdateLessonHourSuccess
}
