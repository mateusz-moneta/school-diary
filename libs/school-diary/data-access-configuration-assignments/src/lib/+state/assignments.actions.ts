import { Action } from '@ngrx/store';

import { CreateAssignmentFailPayload } from '../payloads/create-assignment-fail.payload';
import { CreateAssignmentRequestPayload } from '../request-payloads/create-assignment.request-payload';
import { CreateAssignmentSuccessPayload } from '../payloads/create-assignment-success.payload';
import { DeleteAssignmentFailPayload } from '../payloads/delete-assignment-fail.payload';
import { DeleteAssignmentRequestPayload } from '../request-payloads/delete-assignment.request-payload';
import { DeleteAssignmentSuccessPayload } from '../payloads/delete-assignment-success.payload';
import { GetAssignmentsFailPayload } from '../payloads/get-assignments-fail.payload';
import { GetAssignmentsRequestPayload } from '../request-payloads/get-assignments.request-payload';
import { GetAssignmentsSuccessPayload } from '../payloads/get-assignments-success.payload';
import { SelectAssignmentPayload } from '../payloads/select-assignment.payload';
import { UpdateAssignmentRequestPayload } from '../request-payloads/update-assignment.request-payload';
import { UpdateAssignmentFailPayload } from '../payloads/update-assignment-fail.payload';
import { UpdateAssignmentSuccessPayload } from '../payloads/update-assignment-success.payload';

export namespace fromAssignmentsActions {
  export enum Types {
    CreateAssignment = '[Assignments] Create Assignment',
    CreateAssignmentFail = '[Assignments] Create Assignment Fail',
    CreateAssignmentSuccess = '[Assignments] Create Assignment Success',
    DeleteAssignment = '[Assignments] Delete Assignment',
    DeleteAssignmentFail = '[Assignments] Delete Assignment Fail',
    DeleteAssignmentSuccess = '[Assignments] Delete Assignment Success',
    GetAssignments = '[Assignments] Get Assignments',
    GetAssignmentsFail = '[Assignments] Get Assignments Fail',
    GetAssignmentsSuccess = '[Assignments] Get Assignments Success',
    SelectAssignment = '[Assignments] Select Assignment',
    UnselectAssignment = '[Assignments] Unselect Assignment',
    UpdateAssignment = '[Assignments] Update Assignment',
    UpdateAssignmentFail = '[Assignments] Update Assignment Fail',
    UpdateAssignmentSuccess = '[Assignments] Update Assignment Success'
  }

  export class CreateAssignment implements Action {
    readonly type = Types.CreateAssignment;

    constructor(public payload: CreateAssignmentRequestPayload) {}
  }

  export class CreateAssignmentFail implements Action {
    readonly type = Types.CreateAssignmentFail;

    constructor(public payload: CreateAssignmentFailPayload) {}
  }

  export class CreateAssignmentSuccess implements Action {
    readonly type = Types.CreateAssignmentSuccess;

    constructor(public payload: CreateAssignmentSuccessPayload) {}
  }

  export class DeleteAssignment implements Action {
    readonly type = Types.DeleteAssignment;

    constructor(public payload: DeleteAssignmentRequestPayload) {}
  }

  export class DeleteAssignmentFail implements Action {
    readonly type = Types.DeleteAssignmentFail;

    constructor(public payload: DeleteAssignmentFailPayload) {}
  }

  export class DeleteAssignmentSuccess implements Action {
    readonly type = Types.DeleteAssignmentSuccess;

    constructor(public payload: DeleteAssignmentSuccessPayload) {}
  }

  export class GetAssignments implements Action {
    readonly type = Types.GetAssignments;

    constructor(public payload: GetAssignmentsRequestPayload) {}
  }

  export class GetAssignmentsFail implements Action {
    readonly type = Types.GetAssignmentsFail;

    constructor(public payload: GetAssignmentsFailPayload) {}
  }

  export class GetAssignmentsSuccess implements Action {
    readonly type = Types.GetAssignmentsSuccess;

    constructor(public payload: GetAssignmentsSuccessPayload) {}
  }

  export class SelectAssignment implements Action {
    readonly type = Types.SelectAssignment;

    constructor(public payload: SelectAssignmentPayload) {}
  }

  export class UnselectAssignment implements Action {
    readonly type = Types.UnselectAssignment;
  }

  export class UpdateAssignment implements Action {
    readonly type = Types.UpdateAssignment;

    constructor(public payload: UpdateAssignmentRequestPayload) {}
  }

  export class UpdateAssignmentFail implements Action {
    readonly type = Types.UpdateAssignmentFail;

    constructor(public payload: UpdateAssignmentFailPayload) {}
  }

  export class UpdateAssignmentSuccess implements Action {
    readonly type = Types.UpdateAssignmentSuccess;

    constructor(public payload: UpdateAssignmentSuccessPayload) {}
  }

  export type CollectiveType =
    | CreateAssignment
    | CreateAssignmentFail
    | CreateAssignmentSuccess
    | DeleteAssignment
    | DeleteAssignmentFail
    | DeleteAssignmentSuccess
    | GetAssignments
    | GetAssignmentsFail
    | GetAssignmentsSuccess
    | SelectAssignment
    | UnselectAssignment
    | UpdateAssignment
    | UpdateAssignmentFail
    | UpdateAssignmentSuccess
}
