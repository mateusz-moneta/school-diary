import { HttpErrorResponse } from '@angular/common/http';

import { fromSubjectsActions } from './subjects.actions';
import { Subject } from '@school-diary/school-diary/domain';

export const SUBJECTS_FEATURE_KEY = 'subjects';

export interface SubjectsState {
  subjects: Subject[];
  subjectsLoadError: HttpErrorResponse;
  subjectsLoadInProgress: boolean;
  createSubject: Subject;
  createSubjectError: HttpErrorResponse;
  createSubjectInProgress: boolean;
}

export interface SubjectsPartialState {
  readonly [SUBJECTS_FEATURE_KEY]: SubjectsState;
}

export const initialState: SubjectsState = {
  subjects: null,
  subjectsLoadError: null,
  subjectsLoadInProgress: false,
  createSubject: null,
  createSubjectError: null,
  createSubjectInProgress: false
};

export function subjectsReducer(
  state: SubjectsState = initialState,
  action: fromSubjectsActions.CollectiveType
): SubjectsState {
  switch (action.type) {
    case fromSubjectsActions.Types.CreateSubject: {
      state = {
        ...state,
        createSubjectInProgress: true
      };
      break;
    }

    case fromSubjectsActions.Types.CreateSubjectFail: {
      state = {
        ...state,
        createSubjectError: action.payload.error,
        createSubjectInProgress: false
      };
      break;
    }

    case fromSubjectsActions.Types.CreateSubjectSuccess: {
      state = {
        ...state,
        createSubject: action.payload,
        createSubjectInProgress: false
      };
      break;
    }

    case fromSubjectsActions.Types.GetSubjects: {
      state = {
        ...state,
        subjectsLoadInProgress: true
      };
      break;
    }

    case fromSubjectsActions.Types.GetSubjectsFail: {
      state = {
        ...state,
        subjectsLoadError: action.payload.error,
        subjectsLoadInProgress: false
      };
      break;
    }

    case fromSubjectsActions.Types.GetSubjectsSuccess: {
      state = {
        ...state,
        subjects: action.payload,
        subjectsLoadInProgress: false
      };
      break;
    }
  }

  return state;
}
