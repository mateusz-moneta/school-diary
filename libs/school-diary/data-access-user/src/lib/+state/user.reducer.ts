import { HttpErrorResponse } from '@angular/common/http';

import { fromUserActions } from './user.actions';
import { User } from '@school-diary/school-diary/domain';

export const USER_FEATURE_KEY = 'user';

export interface UserState {
  loginUser: User;
  loginUserError: HttpErrorResponse;
  loginUserInProgress: boolean;
  registerUser: User;
  registerUserError: HttpErrorResponse;
  registerUserInProgress: boolean;
  token: string;
}

export interface UserPartialState {
  readonly [USER_FEATURE_KEY]: UserState;
}

export const initialState: UserState = {
  loginUser: null,
  loginUserError: null,
  loginUserInProgress: false,
  registerUser: null,
  registerUserError: null,
  registerUserInProgress: false,
  token: null
};

export function userReducer(
  state: UserState = initialState,
  action: fromUserActions.CollectiveType
): UserState {
  switch (action.type) {
    case fromUserActions.Types.LoginUser: {
      state = {
        ...state,
        loginUserInProgress: true
      };
      break;
    }

    case fromUserActions.Types.LoginUserFail: {
      state = {
        ...state,
        loginUserError: action.payload.error,
        loginUserInProgress: false
      };

      break;
    }

    case fromUserActions.Types.LoginUserSuccess: {
      state = {
        ...state,
        loginUser: action.payload.user,
        loginUserInProgress: false,
        token: action.payload.token
      };

      break;
    }

    case fromUserActions.Types.RegisterUser: {
      state = {
        ...state,
        registerUserInProgress: true
      };
      break;
    }

    case fromUserActions.Types.RegisterUserFail: {
      state = {
        ...state,
        registerUserError: action.payload.error,
        registerUserInProgress: false
      };

      break;
    }

    case fromUserActions.Types.RegisterUserSuccess: {
      state = {
        ...state,
        registerUser: action.payload.user,
        registerUserInProgress: false
      };

      break;
    }
  }

  return state;
}
