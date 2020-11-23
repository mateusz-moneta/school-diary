import { HttpErrorResponse } from '@angular/common/http';

import { fromUsersActions } from './users.actions';
import { StudentsCollection } from '../interfaces/students-collection.interface';
import { TeachersCollection } from '../interfaces/teachers-collection.interface';

export const USERS_FEATURE_KEY = 'users';

export interface UsersState {
  students: StudentsCollection;
  getStudentsError: HttpErrorResponse;
  getStudentsInProgress: boolean;
  teachers: TeachersCollection;
  getTeachersError: HttpErrorResponse;
  getTeachersInProgress: boolean;
}

export interface UsersPartialState {
  readonly [USERS_FEATURE_KEY]: UsersState;
}

export const initialState: UsersState = {
  students: null,
  getStudentsError: null,
  getStudentsInProgress: false,
  teachers: null,
  getTeachersError: null,
  getTeachersInProgress: false
};

export function usersReducer(
  state: UsersState = initialState,
  action: fromUsersActions.CollectiveType
): UsersState {
  switch (action.type) {
    case fromUsersActions.Types.GetStudents: {
      state = {
        ...state,
        getStudentsInProgress: true
      };
      break;
    }

    case fromUsersActions.Types.GetStudentsFail: {
      state = {
        ...state,
        getStudentsError: action.payload.error,
        getStudentsInProgress: false
      };

      break;
    }

    case fromUsersActions.Types.GetStudentsSuccess: {
      state = {
        ...state,
        students: action.payload,
        getStudentsInProgress: false
      };

      break;
    }

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
