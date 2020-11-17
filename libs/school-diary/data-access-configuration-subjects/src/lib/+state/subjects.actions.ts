import { Action } from '@ngrx/store';

import { CreateSubjectFailPayload } from '../payloads/create-subject-fail.payload';
import { CreateSubjectRequestPayload } from '../request-payloads/create-subject.request-payload';
import { CreateSubjectSuccessPayload } from '../payloads/create-subject-success.payload';
import { DeleteSubjectFailPayload } from '../payloads/delete-subject-fail.payload';
import { DeleteSubjectRequestPayload } from '../request-payloads/delete-subject.request-payload';
import { DeleteSubjectSuccessPayload } from '../payloads/delete-subject-success.payload';
import { GetSubjectsFailPayload } from '../payloads/get-subjects-fail.payload';
import { GetSubjectsRequestPayload } from '../request-payloads/get-subjects.request-payload';
import { GetSubjectsSuccessPayload } from '../payloads/get-subjects-success.payload';
import { SelectSubjectPayload } from '../payloads/select-subject.payload';
import { UpdateSubjectRequestPayload } from '../request-payloads/update-subject.request-payload';
import { UpdateSubjectFailPayload } from '../payloads/update-subject-fail.payload';
import { UpdateSubjectSuccessPayload } from '../payloads/update-subject-success.payload';

export namespace fromSubjectsActions {
  export enum Types {
    CreateSubject = '[Subjects] Create Subject',
    CreateSubjectFail = '[Subjects] Create Subject Fail',
    CreateSubjectSuccess = '[Subjects] Create Subject Success',
    DeleteSubject = '[Subjects] Delete Subject',
    DeleteSubjectFail = '[Subjects] Delete Subject Fail',
    DeleteSubjectSuccess = '[Subjects] Delete Subject Success',
    GetSubjects = '[Subjects] Get Subjects',
    GetSubjectsFail = '[Subjects] Get Subjects Fail',
    GetSubjectsSuccess = '[Subjects] Get Subjects Success',
    SelectSubject = '[Subjects] Select Subject',
    UnselectSubject = '[Subjects] Unselect Subject',
    UpdateSubject = '[Subjects] Update Subject',
    UpdateSubjectFail = '[Subjects] Update Subject Fail',
    UpdateSubjectSuccess = '[Subjects] Update Subject Success'
  }

  export class CreateSubject implements Action {
    readonly type = Types.CreateSubject;

    constructor(public payload: CreateSubjectRequestPayload) {}
  }

  export class CreateSubjectFail implements Action {
    readonly type = Types.CreateSubjectFail;

    constructor(public payload: CreateSubjectFailPayload) {}
  }

  export class CreateSubjectSuccess implements Action {
    readonly type = Types.CreateSubjectSuccess;

    constructor(public payload: CreateSubjectSuccessPayload) {}
  }

  export class DeleteSubject implements Action {
    readonly type = Types.DeleteSubject;

    constructor(public payload: DeleteSubjectRequestPayload) {}
  }

  export class DeleteSubjectFail implements Action {
    readonly type = Types.DeleteSubjectFail;

    constructor(public payload: DeleteSubjectFailPayload) {}
  }

  export class DeleteSubjectSuccess implements Action {
    readonly type = Types.DeleteSubjectSuccess;

    constructor(public payload: DeleteSubjectSuccessPayload) {}
  }

  export class GetSubjects implements Action {
    readonly type = Types.GetSubjects;

    constructor(public payload: GetSubjectsRequestPayload) {}
  }

  export class GetSubjectsFail implements Action {
    readonly type = Types.GetSubjectsFail;

    constructor(public payload: GetSubjectsFailPayload) {}
  }

  export class GetSubjectsSuccess implements Action {
    readonly type = Types.GetSubjectsSuccess;

    constructor(public payload: GetSubjectsSuccessPayload) {}
  }

  export class SelectSubject implements Action {
    readonly type = Types.SelectSubject;

    constructor(public payload: SelectSubjectPayload) {}
  }

  export class UnselectSubject implements Action {
    readonly type = Types.UnselectSubject;
  }

  export class UpdateSubject implements Action {
    readonly type = Types.UpdateSubject;

    constructor(public payload: UpdateSubjectRequestPayload) {}
  }

  export class UpdateSubjectFail implements Action {
    readonly type = Types.UpdateSubjectFail;

    constructor(public payload: UpdateSubjectFailPayload) {}
  }

  export class UpdateSubjectSuccess implements Action {
    readonly type = Types.UpdateSubjectSuccess;

    constructor(public payload: UpdateSubjectSuccessPayload) {}
  }

  export type CollectiveType =
    | CreateSubject
    | CreateSubjectFail
    | CreateSubjectSuccess
    | DeleteSubject
    | DeleteSubjectFail
    | DeleteSubjectSuccess
    | GetSubjects
    | GetSubjectsFail
    | GetSubjectsSuccess
    | SelectSubject
    | UnselectSubject
    | UpdateSubject
    | UpdateSubjectFail
    | UpdateSubjectSuccess
}
