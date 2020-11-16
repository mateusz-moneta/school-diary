import { Action } from '@ngrx/store';

import { LoginUserFailPayload } from '../payloads/login-user-fail.payload';
import { LoginUserRequestPayload } from '../payloads/login-user.request-payload';
import { LoginUserSuccessPayload } from '../payloads/login-user-success.payload';
import { RegisterUserFailPayload } from '../payloads/register-user-fail.payload';
import { RegisterUserRequestPayload } from '../payloads/register-user.request-payload';
import { RegisterUserSuccessPayload } from '../payloads/register-user-success.payload';

export namespace fromUserActions {
  export enum Types {
    LoginUser = '[User] Login User',
    LoginUserFail = '[User] Login User Fail',
    LoginUserSuccess = '[User] Login User Success',
    RegisterUser = '[User] Register User',
    RegisterUserFail = '[User] Register User Fail',
    RegisterUserSuccess = '[User] Register User Success',
  }

  export class LoginUser implements Action {
    readonly type = Types.LoginUser;

    constructor(public payload: LoginUserRequestPayload) {}
  }

  export class LoginUserFail implements Action {
    readonly type = Types.LoginUserFail;

    constructor(public payload: LoginUserFailPayload) {}
  }

  export class LoginUserSuccess implements Action {
    readonly type = Types.LoginUserSuccess;

    constructor(public payload: LoginUserSuccessPayload) {}
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
    | LoginUser
    | LoginUserFail
    | LoginUserSuccess
    | RegisterUser
    | RegisterUserFail
    | RegisterUserSuccess
}
