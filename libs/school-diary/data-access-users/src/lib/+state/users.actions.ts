import { Action } from '@ngrx/store';

import { GetTeachersRequestPayload } from '../request-payloads/get-teachers.request-payload';

export namespace fromUsersActions {
  export enum Types {
    GetTeachers = '[Users] Get Teachers',
    GetTeachersFail = '[Users] Get Teachers Fail',
    GetTeachersSuccess = '[Users] Get Teachers Success'
  }

  export class GetTeachers implements Action {
    readonly type = Types.GetTeachers;

    constructor(public payload: GetTeachersRequestPayload) {}
  }

  export class GetTeachersFail implements Action {
    readonly type = Types.GetTeachersFail;

    constructor(public payload: any) {}
  }

  export class GetTeachersSuccess implements Action {
    readonly type = Types.GetTeachersSuccess;

    constructor(public payload: any) {}
  }

  export type CollectiveType =
    | GetTeachers
    | GetTeachersFail
    | GetTeachersSuccess
}
