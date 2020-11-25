import { Action } from '@ngrx/store';

import { LoginUserFailPayload } from '../payloads/login-user-fail.payload';
import { LoginUserRequestPayload } from '../request-payloads/login-user.request-payload';
import { LoginUserSuccessPayload } from '../payloads/login-user-success.payload';

export namespace fromUserSessionActions {
  export enum Types {
    LoginUser = '[User Session] Login User',
    LoginUserFail = '[User Session] Login User Fail',
    LoginUserSuccess = '[User Session] Login User Success',
    LogoutUser = '[User Session] Logout User'
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

  export class LogoutUser implements Action {
    readonly type = Types.LogoutUser;
  }

  export type CollectiveType =
    | LoginUser
    | LoginUserFail
    | LoginUserSuccess
    | LogoutUser
}