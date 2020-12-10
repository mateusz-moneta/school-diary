import { HttpErrorResponse } from '@angular/common/http';

import { fromLessonHoursActions } from './lesson-hours.actions';
import { LessonHour } from '@school-diary/school-diary/domain';
import { LessonHoursCollection } from '../interfaces/lesson-hours-collection.interface';

export const LESSON_HOURS_FEATURE_KEY = 'lessonHours';

export interface LessonHoursState {
  lessonHours: LessonHoursCollection;
  lessonHoursLoadError: HttpErrorResponse;
  lessonHoursLoadInProgress: boolean;
  createdLessonHour: LessonHour;
  createLessonHourError: HttpErrorResponse;
  createLessonHourInProgress: boolean;
  deletedLessonHourId: number;
  deleteLessonHourError: HttpErrorResponse;
  deleteLessonHourInProgress: boolean;
  selectedLessonHour: LessonHour;
  selectedLessonHourError: HttpErrorResponse;
  selectedLessonHourLoadInProgress: boolean;
  updatedLessonHour: LessonHour;
  updateLessonHourError: HttpErrorResponse;
  updateLessonHourInProgress: boolean;
}

export interface LessonHoursPartialState {
  readonly [LESSON_HOURS_FEATURE_KEY]: LessonHoursState;
}

export const initialState: LessonHoursState = {
  lessonHours: null,
  lessonHoursLoadError: null,
  lessonHoursLoadInProgress: false,
  createdLessonHour: null,
  createLessonHourError: null,
  createLessonHourInProgress: false,
  deletedLessonHourId: null,
  deleteLessonHourError: null,
  deleteLessonHourInProgress: false,
  selectedLessonHour: null,
  selectedLessonHourError: null,
  selectedLessonHourLoadInProgress: false,
  updatedLessonHour: null,
  updateLessonHourError: null,
  updateLessonHourInProgress: false
};

export function lessonHoursReducer(
  state: LessonHoursState = initialState,
  action: fromLessonHoursActions.CollectiveType
): LessonHoursState {
  switch (action.type) {
    case fromLessonHoursActions.Types.CreateLessonHour: {
      state = {
        ...state,
        createLessonHourInProgress: true
      };
      break;
    }

    case fromLessonHoursActions.Types.CreateLessonHourFail: {
      state = {
        ...state,
        createLessonHourError: action.payload.error,
        createLessonHourInProgress: false
      };
      break;
    }

    case fromLessonHoursActions.Types.CreateLessonHourSuccess: {
      state = {
        ...state,
        lessonHours: {
          data: [
            ...state.lessonHours.data,
            action.payload
          ],
          recordsCount: state.lessonHours.recordsCount + 1
        },
        createdLessonHour: action.payload,
        createLessonHourInProgress: false
      };
      break;
    }

    case fromLessonHoursActions.Types.DeleteLessonHour: {
      state = {
        ...state,
        deleteLessonHourInProgress: true
      };
      break;
    }

    case fromLessonHoursActions.Types.DeleteLessonHourFail: {
      state = {
        ...state,
        deleteLessonHourError: action.payload.error,
        deleteLessonHourInProgress: false
      };
      break;
    }

    case fromLessonHoursActions.Types.DeleteLessonHourSuccess: {
      state = {
        ...state,
        lessonHours: {
          data: state.lessonHours.data.filter(lessonHour => lessonHour.id !== parseInt(action.payload.id, 10)),
          recordsCount: state.lessonHours.recordsCount - 1
        },
        deletedLessonHourId: parseInt(action.payload.id, 10),
        deleteLessonHourInProgress: false
      };
      break;
    }

    case fromLessonHoursActions.Types.GetLessonHour: {
      state = {
        ...state,
        selectedLessonHourLoadInProgress: true
      };
      break;
    }

    case fromLessonHoursActions.Types.GetLessonHourFail: {
      state = {
        ...state,
        selectedLessonHourError: action.payload.error,
        selectedLessonHourLoadInProgress: false
      };
      break;
    }

    case fromLessonHoursActions.Types.GetLessonHourSuccess: {
      state = {
        ...state,
        selectedLessonHour: action.payload,
        selectedLessonHourLoadInProgress: false
      };
      break;
    }

    case fromLessonHoursActions.Types.GetLessonHours: {
      state = {
        ...state,
        lessonHoursLoadInProgress: true
      };
      break;
    }

    case fromLessonHoursActions.Types.GetLessonHoursFail: {
      state = {
        ...state,
        lessonHoursLoadError: action.payload.error,
        lessonHoursLoadInProgress: false
      };
      break;
    }

    case fromLessonHoursActions.Types.GetLessonHoursSuccess: {
      state = {
        ...state,
        lessonHours: {
          data: action.payload.data,
          recordsCount: action.payload.records_count
        },
        lessonHoursLoadInProgress: false
      };
      break;
    }

    case fromLessonHoursActions.Types.UpdateLessonHour: {
      state = {
        ...state,
        updateLessonHourInProgress: true
      };
      break;
    }

    case fromLessonHoursActions.Types.UpdateLessonHourFail: {
      state = {
        ...state,
        updateLessonHourError: action.payload.error,
        updateLessonHourInProgress: false
      };
      break;
    }

    case fromLessonHoursActions.Types.UpdateLessonHourSuccess: {
      state = {
        ...state,
        lessonHours: {
          ...state.lessonHours,
          data: state.lessonHours.data.map(classRoom => classRoom.id === action.payload.id ? action.payload : classRoom)
        },
        updatedLessonHour: action.payload,
        updateLessonHourInProgress: false
      };
      break;
    }
  }

  return state;
}
