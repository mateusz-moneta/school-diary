import { Action } from '@ngrx/store';

import { RegisterUserFailPayload } from '../payloads/register-user-fail.payload';
import { RegisterUserRequestPayload } from '../request-payloads/register-user.request-payload';
import { RegisterUserSuccessPayload } from '../payloads/register-user-success.payload';

export namespace fromUserRegistrationActions {
  export enum Types {
    RegisterUser = '[User Registration] Register User',
    RegisterUserFail = '[User Registration] Register User Fail',
    RegisterUserSuccess = '[User Registration] Register User Success',
  }

  export class RegisterUser implements Action {
    readonly type = Types.RegisterUser;

    constructor(public payload: RegisterUserRequestPayload) {}
  }

  export class RegisterUserFail implements Action {
    readonly type = Types.RegisterUserFail;

    constructor(public payload: RegisterUserFailPayload) {}
  }

  export class RegisterUserSuccess implements Action {
    readonly type = Types.RegisterUserSuccess;

    constructor(public payload: RegisterUserSuccessPayload) {}
  }

  export type CollectiveType =
    | RegisterUser
    | RegisterUserFail
    | RegisterUserSuccess
}
