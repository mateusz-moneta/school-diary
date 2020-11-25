import { Action } from '@ngrx/store';

import { GetStudentsFailPayload } from '../payloads/get-students-fail.payload';
import { GetStudentsRequestPayload } from '../request-payloads/get-students.request-payload';
import { GetStudentsSuccessPayload } from '../payloads/get-students-success.payload';
import { GetTeachersRequestPayload } from '../request-payloads/get-teachers.request-payload';
import { GetTeachersFailPayload } from '../payloads/get-teachers-fail.payload';
import { GetTeachersSuccessPayload } from '../payloads/get-teachers-success.payload';

export namespace fromUsersActions {
  export enum Types {
    GetStudents = '[Users] Get Students',
    GetStudentsFail = '[Users] Get Students Fail',
    GetStudentsSuccess = '[Users] Get Students Success',
    GetTeachers = '[Users] Get Teachers',
    GetTeachersFail = '[Users] Get Teachers Fail',
    GetTeachersSuccess = '[Users] Get Teachers Success'
  }

  export class GetStudents implements Action {
    readonly type = Types.GetStudents;

    constructor(public payload: GetStudentsRequestPayload) {}
  }

  export class GetStudentsFail implements Action {
    readonly type = Types.GetStudentsFail;

    constructor(public payload: GetStudentsFailPayload) {}
  }

  export class GetStudentsSuccess implements Action {
    readonly type = Types.GetStudentsSuccess;

    constructor(public payload: GetStudentsSuccessPayload) {}
  }

  export class GetTeachers implements Action {
    readonly type = Types.GetTeachers;

    constructor(public payload: GetTeachersRequestPayload) {}
  }

  export class GetTeachersFail implements Action {
    readonly type = Types.GetTeachersFail;

    constructor(public payload: GetTeachersFailPayload) {}
  }

  export class GetTeachersSuccess implements Action {
    readonly type = Types.GetTeachersSuccess;

    constructor(public payload: GetTeachersSuccessPayload) {}
  }

  export type CollectiveType =
    | GetStudents
    | GetStudentsFail
    | GetStudentsSuccess
    | GetTeachers
    | GetTeachersFail
    | GetTeachersSuccess
}
