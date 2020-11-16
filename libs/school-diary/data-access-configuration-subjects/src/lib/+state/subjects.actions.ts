import { Action } from '@ngrx/store';

import { CreateSubjectFailPayload } from '../payloads/create-subject-fail.payload';
import { CreateSubjectRequestPayload } from '../request-payloads/create-subject.request-payload';
import { CreateSubjectSuccessPayload } from '../payloads/create-subject-success.payload';
import { GetSubjectsFailPayload } from '../payloads/get-subjects-fail.payload';
import { GetSubjectsSuccessPayload } from '../payloads/get-subjects-success.payload';

export namespace fromSubjectsActions {
  export enum Types {
    CreateSubject = '[Subjects] Create Subject',
    CreateSubjectFail = '[Subjects] Create Subject Fail',
    CreateSubjectSuccess = '[Subjects] Create Subject Success',
    GetSubjects = '[Subjects] Get Subjects',
    GetSubjectsFail = '[Subjects] Get Subjects Fail',
    GetSubjectsSuccess = '[Subjects] Get Subjects Success'
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

  export class GetSubjects implements Action {
    readonly type = Types.GetSubjects;
  }

  export class GetSubjectsFail implements Action {
    readonly type = Types.GetSubjectsFail;

    constructor(public payload: GetSubjectsFailPayload) {}
  }

  export class GetSubjectsSuccess implements Action {
    readonly type = Types.GetSubjectsSuccess;

    constructor(public payload: GetSubjectsSuccessPayload[]) {}
  }

  export type CollectiveType =
    | CreateSubject
    | CreateSubjectFail
    | CreateSubjectSuccess
    | GetSubjects
    | GetSubjectsFail
    | GetSubjectsSuccess
}
