import { HttpErrorResponse } from '@angular/common/http';

import { fromUserRegistrationActions } from './user-registration.actions';
import { User } from '@school-diary/school-diary/domain';

export const USER_REGISTRATION_FEATURE_KEY = 'userRegistration';

export interface UserRegistrationState {
  registerUser: User;
  registerUserError: HttpErrorResponse;
  registerUserInProgress: boolean;
}

export interface UserRegistrationPartialState {
  readonly [USER_REGISTRATION_FEATURE_KEY]: UserRegistrationState;
}

export const initialState: UserRegistrationState = {
  registerUser: null,
  registerUserError: null,
  registerUserInProgress: false
};

export function userRegistrationReducer(
  state: UserRegistrationState = initialState,
  action: fromUserRegistrationActions.CollectiveType
): UserRegistrationState {
  switch (action.type) {
    case fromUserRegistrationActions.Types.RegisterUser: {
      state = {
        ...state,
        registerUserInProgress: true
      };
      break;
    }

    case fromUserRegistrationActions.Types.RegisterUserFail: {
      state = {
        ...state,
        registerUserError: action.payload.error,
        registerUserInProgress: false
      };

      break;
    }

    case fromUserRegistrationActions.Types.RegisterUserSuccess: {
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
