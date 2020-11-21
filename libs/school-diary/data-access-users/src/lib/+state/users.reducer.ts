import { HttpErrorResponse } from '@angular/common/http';

import { fromUsersActions } from './users.actions';
import { TeachersCollection } from '../interfaces/teachers-collection.interface';

export const USERS_FEATURE_KEY = 'users';

export interface UsersState {
  teachers: TeachersCollection;
  getTeachersError: HttpErrorResponse;
  getTeachersInProgress: boolean;
}

export interface UsersPartialState {
  readonly [USERS_FEATURE_KEY]: UsersState;
}

export const initialState: UsersState = {
  teachers: null,
  getTeachersError: null,
  getTeachersInProgress: false
};

export function usersReducer(
  state: UsersState = initialState,
  action: fromUsersActions.CollectiveType
): UsersState {
  switch (action.type) {
    case fromUsersActions.Types.GetTeachers: {
      state = {
        ...state,
        getTeachersInProgress: true
      };
      break;
    }

    case fromUsersActions.Types.GetTeachersFail: {
      state = {
        ...state,
        getTeachersError: action.payload.error,
        getTeachersInProgress: false
      };

      break;
    }

    case fromUsersActions.Types.GetTeachersSuccess: {
      state = {
        ...state,
        teachers: action.payload,
        getTeachersInProgress: false
      };

      break;
    }
  }

  return state;
}
