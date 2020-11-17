import { HttpErrorResponse } from '@angular/common/http';

import { fromSubjectsActions } from './subjects.actions';
import { Subject } from '@school-diary/school-diary/domain';
import { SubjectsCollection } from '../interfaces/subjects-collection.interface';

export const SUBJECTS_FEATURE_KEY = 'subjects';

export interface SubjectsState {
  subjects: SubjectsCollection;
  subjectsLoadError: HttpErrorResponse;
  subjectsLoadInProgress: boolean;
  createdSubject: Subject;
  createSubjectError: HttpErrorResponse;
  createSubjectInProgress: boolean;
  deletedSubjectId: number;
  deleteSubjectError: HttpErrorResponse;
  deleteSubjectInProgress: boolean;
  selectedSubject: Subject;
  updatedSubject: Subject;
  updateSubjectError: HttpErrorResponse;
  updateSubjectInProgress: boolean;
}

export interface SubjectsPartialState {
  readonly [SUBJECTS_FEATURE_KEY]: SubjectsState;
}

export const initialState: SubjectsState = {
  subjects: null,
  subjectsLoadError: null,
  subjectsLoadInProgress: false,
  createdSubject: null,
  createSubjectError: null,
  createSubjectInProgress: false,
  deletedSubjectId: null,
  deleteSubjectError: null,
  deleteSubjectInProgress: false,
  selectedSubject: null,
  updatedSubject: null,
  updateSubjectError: null,
  updateSubjectInProgress: false
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
        createdSubject: action.payload,
        createSubjectInProgress: false
      };
      break;
    }

    case fromSubjectsActions.Types.DeleteSubject: {
      state = {
        ...state,
        deleteSubjectInProgress: true
      };
      break;
    }

    case fromSubjectsActions.Types.DeleteSubjectFail: {
      state = {
        ...state,
        deleteSubjectError: action.payload.error,
        deleteSubjectInProgress: false
      };
      break;
    }

    case fromSubjectsActions.Types.DeleteSubjectSuccess: {
      state = {
        ...state,
        subjects: {
          data: state.subjects.data.filter(subject => subject.id !== parseInt(action.payload.id, 10)),
          recordsCount: state.subjects.recordsCount - 1
        },
        deletedSubjectId: parseInt(action.payload.id, 10),
        deleteSubjectInProgress: false
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
        subjects: {
          data: action.payload.data,
          recordsCount: action.payload.records_count
        }
      };
      break;
    }

    case fromSubjectsActions.Types.SelectSubject: {
      state = {
        ...state,
        selectedSubject: action.payload
      };
      break;
    }

    case fromSubjectsActions.Types.UnselectSubject: {
      state = {
        ...state,
        selectedSubject: null
      };
      break;
    }

    case fromSubjectsActions.Types.UpdateSubject: {
      state = {
        ...state,
        updateSubjectInProgress: true
      };
      break;
    }

    case fromSubjectsActions.Types.UpdateSubjectFail: {
      state = {
        ...state,
        updateSubjectError: action.payload.error,
        updateSubjectInProgress: false
      };
      break;
    }

    case fromSubjectsActions.Types.UpdateSubjectSuccess: {
      state = {
        ...state,
        subjects: {
          ...state.subjects,
          data: state.subjects.data.map(subject => subject.id === action.payload.id ? action.payload : subject)
        },
        updatedSubject: action.payload,
        updateSubjectInProgress: false
      };
      break;
    }
  }

  return state;
}
