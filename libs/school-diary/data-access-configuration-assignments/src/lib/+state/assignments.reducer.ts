import { HttpErrorResponse } from '@angular/common/http';

import { Assignment, SelectedAssignment } from '@school-diary/school-diary/domain';
import { AssignmentsCollection } from '../interfaces/assignments-collection.interface';
import { fromAssignmentsActions } from './assignments.actions';

export const ASSIGNMENTS_FEATURE_KEY = 'assignments';

export interface AssignmentsState {
  assignments: AssignmentsCollection;
  assignmentsLoadError: HttpErrorResponse;
  assignmentsLoadInProgress: boolean;
  createdAssignment: Assignment;
  createAssignmentError: HttpErrorResponse;
  createAssignmentInProgress: boolean;
  deletedAssignmentId: number;
  deleteAssignmentError: HttpErrorResponse;
  deleteAssignmentInProgress: boolean;
  selectedAssignment: SelectedAssignment;
  selectedAssignmentError: HttpErrorResponse;
  selectedAssignmentLoadInProgress: boolean;
  updatedAssignment: Assignment;
  updateAssignmentError: HttpErrorResponse;
  updateAssignmentInProgress: boolean;
}

export interface AssignmentsPartialState {
  readonly [ASSIGNMENTS_FEATURE_KEY]: AssignmentsState;
}

export const initialState: AssignmentsState = {
  assignments: null,
  assignmentsLoadError: null,
  assignmentsLoadInProgress: false,
  createdAssignment: null,
  createAssignmentError: null,
  createAssignmentInProgress: false,
  deletedAssignmentId: null,
  deleteAssignmentError: null,
  deleteAssignmentInProgress: false,
  selectedAssignment: null,
  selectedAssignmentError: null,
  selectedAssignmentLoadInProgress: false,
  updatedAssignment: null,
  updateAssignmentError: null,
  updateAssignmentInProgress: false
};

export function assignmentsReducer(
  state: AssignmentsState = initialState,
  action: fromAssignmentsActions.CollectiveType
): AssignmentsState {
  switch (action.type) {
    case fromAssignmentsActions.Types.CreateAssignment: {
      state = {
        ...state,
        createAssignmentInProgress: true
      };
      break;
    }

    case fromAssignmentsActions.Types.CreateAssignmentFail: {
      state = {
        ...state,
        createAssignmentError: action.payload.error,
        createAssignmentInProgress: false
      };
      break;
    }

    case fromAssignmentsActions.Types.CreateAssignmentSuccess: {
      state = {
        ...state,
        assignments: {
          data: [
            ...state.assignments.data,
            action.payload
          ],
          recordsCount: state.assignments.recordsCount + 1
        },
        createdAssignment: action.payload,
        createAssignmentInProgress: false
      };
      break;
    }

    case fromAssignmentsActions.Types.DeleteAssignment: {
      state = {
        ...state,
        deleteAssignmentInProgress: true
      };
      break;
    }

    case fromAssignmentsActions.Types.DeleteAssignmentFail: {
      state = {
        ...state,
        deleteAssignmentError: action.payload.error,
        deleteAssignmentInProgress: false
      };
      break;
    }

    case fromAssignmentsActions.Types.DeleteAssignmentSuccess: {
      state = {
        ...state,
        assignments: {
          data: state.assignments.data.filter(classRoom => classRoom.id !== parseInt(action.payload.id, 10)),
          recordsCount: state.assignments.recordsCount - 1
        },
        deletedAssignmentId: parseInt(action.payload.id, 10),
        deleteAssignmentInProgress: false
      };
      break;
    }

    case fromAssignmentsActions.Types.GetAssignment: {
      state = {
        ...state,
        selectedAssignmentLoadInProgress: true
      };
      break;
    }

    case fromAssignmentsActions.Types.GetAssignmentsFail: {
      state = {
        ...state,
        selectedAssignmentError: action.payload.error,
        selectedAssignmentLoadInProgress: false
      };
      break;
    }

    case fromAssignmentsActions.Types.GetAssignmentSuccess: {
      state = {
        ...state,
        selectedAssignment: action.payload,
        selectedAssignmentLoadInProgress: false
      };
      break;
    }

    case fromAssignmentsActions.Types.GetAssignments: {
      state = {
        ...state,
        assignmentsLoadInProgress: true
      };
      break;
    }

    case fromAssignmentsActions.Types.GetAssignmentsFail: {
      state = {
        ...state,
        assignmentsLoadError: action.payload.error,
        assignmentsLoadInProgress: false
      };
      break;
    }

    case fromAssignmentsActions.Types.GetAssignmentsSuccess: {
      state = {
        ...state,
        assignments: {
          data: action.payload.data,
          recordsCount: action.payload.records_count
        },
        assignmentsLoadInProgress: false
      };
      break;
    }

    case fromAssignmentsActions.Types.UpdateAssignment: {
      state = {
        ...state,
        updateAssignmentInProgress: true
      };
      break;
    }

    case fromAssignmentsActions.Types.UpdateAssignmentFail: {
      state = {
        ...state,
        updateAssignmentError: action.payload.error,
        updateAssignmentInProgress: false
      };
      break;
    }

    case fromAssignmentsActions.Types.UpdateAssignmentSuccess: {
      state = {
        ...state,
        assignments: {
          ...state.assignments,
          data: state.assignments.data.map(assignments => assignments.id === action.payload.id ? action.payload : assignments)
        },
        updatedAssignment: action.payload,
        updateAssignmentInProgress: false
      };
      break;
    }
  }

  return state;
}
