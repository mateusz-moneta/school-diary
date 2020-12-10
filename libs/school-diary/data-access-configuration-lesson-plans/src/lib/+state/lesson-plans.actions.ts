import { Action } from '@ngrx/store';

import { CreateLessonPlanFailPayload } from '../payloads/create-lesson-plan-fail.payload';
import { CreateLessonPlanRequestPayload } from '../request-payloads/create-lesson-plan.request-payload';
import { CreateLessonPlanSuccessPayload } from '../payloads/create-lesson-plan-success.payload';
import { DeleteLessonPlanFailPayload } from '../payloads/delete-lesson-plan-fail.payload';
import { DeleteLessonPlanRequestPayload } from '../request-payloads/delete-lesson-plan.request-payload';
import { DeleteLessonPlanSuccessPayload } from '../payloads/delete-lesson-plan-success.payload';
import { GetLessonPlanFailPayload } from '../payloads/get-lesson-plan-fail.payload';
import { GetLessonPlanRequestPayload } from '../request-payloads/get-lesson-plan.request-payload';
import { GetLessonPlanSuccessPayload } from '../payloads/get-lesson-plan-success.payload';
import { GetLessonPlansFailPayload } from '../payloads/get-lesson-plans-fail.payload';
import { GetLessonPlansRequestPayload } from '../request-payloads/get-lesson-plans.request-payload';
import { GetLessonPlansSuccessPayload } from '../payloads/get-lesson-plans-success.payload';
import { UpdateLessonPlanRequestPayload } from '../request-payloads/update-lesson-plan.request-payload';
import { UpdateLessonPlanFailPayload } from '../payloads/update-lesson-plan-fail.payload';
import { UpdateLessonPlanSuccessPayload } from '../payloads/update-lesson-plan-success.payload';

export namespace fromLessonPlansActions {
  export enum Types {
    CreateLessonPlan = '[Lesson Plans] Create Lesson Plan',
    CreateLessonPlanFail = '[Lesson Plans] Create Lesson Plan Fail',
    CreateLessonPlanSuccess = '[Lesson Plans] Create Lesson Plan Success',
    DeleteLessonPlan = '[Lesson Plans] Delete Lesson Plan',
    DeleteLessonPlanFail = '[Lesson Plans] Delete Lesson Plan Fail',
    DeleteLessonPlanSuccess = '[Lesson Plans] Delete Lesson Plan Success',
    GetLessonPlan = '[Lesson Plans] Get Lesson Plan',
    GetLessonPlanFail = '[Lesson Plans] Get Lesson Plan Fail',
    GetLessonPlanSuccess = '[Lesson Plans] Get Lesson Plan Success',
    GetLessonPlans = '[Lesson Plans] Get Lesson Plans',
    GetLessonPlansFail = '[Lesson Plans] Get Lesson Plans Fail',
    GetLessonPlansSuccess = '[Lesson Plans] Get Lesson Plans Success',
    UpdateLessonPlan = '[Lesson Plans] Update Lesson Plan',
    UpdateLessonPlanFail = '[Lesson Plans] Update Lesson Plan Fail',
    UpdateLessonPlanSuccess = '[Lesson Plans] Update Lesson Plan Success'
  }

  export class CreateLessonPlan implements Action {
    readonly type = Types.CreateLessonPlan;

    constructor(public payload: CreateLessonPlanRequestPayload) {}
  }

  export class CreateLessonPlanFail implements Action {
    readonly type = Types.CreateLessonPlanFail;

    constructor(public payload: CreateLessonPlanFailPayload) {}
  }

  export class CreateLessonPlanSuccess implements Action {
    readonly type = Types.CreateLessonPlanSuccess;

    constructor(public payload: CreateLessonPlanSuccessPayload) {}
  }

  export class DeleteLessonPlan implements Action {
    readonly type = Types.DeleteLessonPlan;

    constructor(public payload: DeleteLessonPlanRequestPayload) {}
  }

  export class DeleteLessonPlanFail implements Action {
    readonly type = Types.DeleteLessonPlanFail;

    constructor(public payload: DeleteLessonPlanFailPayload) {}
  }

  export class DeleteLessonPlanSuccess implements Action {
    readonly type = Types.DeleteLessonPlanSuccess;

    constructor(public payload: DeleteLessonPlanSuccessPayload) {}
  }

  export class GetLessonPlan implements Action {
    readonly type = Types.GetLessonPlan;

    constructor(public payload: GetLessonPlanRequestPayload) {}
  }

  export class GetLessonPlanFail implements Action {
    readonly type = Types.GetLessonPlanFail;

    constructor(public payload: GetLessonPlanFailPayload) {}
  }

  export class GetLessonPlanSuccess implements Action {
    readonly type = Types.GetLessonPlanSuccess;

    constructor(public payload: GetLessonPlanSuccessPayload) {}
  }

  export class GetLessonPlans implements Action {
    readonly type = Types.GetLessonPlans;

    constructor(public payload: GetLessonPlansRequestPayload) {}
  }

  export class GetLessonPlansFail implements Action {
    readonly type = Types.GetLessonPlansFail;

    constructor(public payload: GetLessonPlansFailPayload) {}
  }

  export class GetLessonPlansSuccess implements Action {
    readonly type = Types.GetLessonPlansSuccess;

    constructor(public payload: GetLessonPlansSuccessPayload) {}
  }

  export class UpdateLessonPlan implements Action {
    readonly type = Types.UpdateLessonPlan;

    constructor(public payload: UpdateLessonPlanRequestPayload) {}
  }

  export class UpdateLessonPlanFail implements Action {
    readonly type = Types.UpdateLessonPlanFail;

    constructor(public payload: UpdateLessonPlanFailPayload) {}
  }

  export class UpdateLessonPlanSuccess implements Action {
    readonly type = Types.UpdateLessonPlanSuccess;

    constructor(public payload: UpdateLessonPlanSuccessPayload) {}
  }

  export type CollectiveType =
    | CreateLessonPlan
    | CreateLessonPlanFail
    | CreateLessonPlanSuccess
    | DeleteLessonPlan
    | DeleteLessonPlanFail
    | DeleteLessonPlanSuccess
    | GetLessonPlan
    | GetLessonPlanFail
    | GetLessonPlanSuccess
    | GetLessonPlans
    | GetLessonPlansFail
    | GetLessonPlansSuccess
    | UpdateLessonPlan
    | UpdateLessonPlanFail
    | UpdateLessonPlanSuccess
}
