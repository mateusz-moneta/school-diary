import { HttpErrorResponse } from '@angular/common/http';

import { fromUserSessionActions } from './user-session.actions';
import { User } from '@school-diary/school-diary/domain';

export const USER_SESSION_FEATURE_KEY = 'userSession';

export interface UserSessionState {
  loginUser: User;
  loginUserError: HttpErrorResponse;
  loginUserInProgress: boolean;
  token: string;
}

export interface UserSessionPartialState {
  readonly [USER_SESSION_FEATURE_KEY]: UserSessionState;
}

export const initialState: UserSessionState = {
  loginUser: null,
  loginUserError: null,
  loginUserInProgress: false,
  token: null
};

export function userSessionReducer(
  state: UserSessionState = initialState,
  action: fromUserSessionActions.CollectiveType
): UserSessionState {
  switch (action.type) {
    case fromUserSessionActions.Types.LoginUser: {
      state = {
        ...state,
        loginUserInProgress: true
      };
      break;
    }

    case fromUserSessionActions.Types.LoginUserFail: {
      state = {
        ...state,
        loginUserError: action.payload.error,
        loginUserInProgress: false
      };

      break;
    }

    case fromUserSessionActions.Types.LoginUserSuccess: {
      state = {
        ...state,
        loginUser: action.payload.user,
        loginUserInProgress: false,
        token: action.payload.token
      };

      break;
    }

    case fromUserSessionActions.Types.LogoutUser: {
      state = {
        ...state,
        loginUser: null,
        token: null
      };

      break;
    }
  }

  return state;
}
