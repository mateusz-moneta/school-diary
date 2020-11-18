import { HttpErrorResponse } from '@angular/common/http';

import { fromLessonPlansActions } from './lesson-plans.actions';
import { LessonPlan } from '@school-diary/school-diary/domain';
import { LessonPlansCollection } from '../interfaces/lesson-plans-collection.interface';

export const LESSON_PLANS_FEATURE_KEY = 'lessonPlans';

export interface LessonPlansState {
  lessonPlans: LessonPlansCollection;
  lessonPlansLoadError: HttpErrorResponse;
  lessonPlansLoadInProgress: boolean;
  createdLessonPlan: LessonPlan;
  createLessonPlanError: HttpErrorResponse;
  createLessonPlanInProgress: boolean;
  deletedLessonPlanId: number;
  deleteLessonPlanError: HttpErrorResponse;
  deleteLessonPlanInProgress: boolean;
  selectedLessonPlan: LessonPlan;
  updatedLessonPlan: LessonPlan;
  updateLessonPlanError: HttpErrorResponse;
  updateLessonPlanInProgress: boolean;
}

export interface LessonPlansPartialState {
  readonly [LESSON_PLANS_FEATURE_KEY]: LessonPlansState;
}

export const initialState: LessonPlansState = {
  lessonPlans: null,
  lessonPlansLoadError: null,
  lessonPlansLoadInProgress: false,
  createdLessonPlan: null,
  createLessonPlanError: null,
  createLessonPlanInProgress: false,
  deletedLessonPlanId: null,
  deleteLessonPlanError: null,
  deleteLessonPlanInProgress: false,
  selectedLessonPlan: null,
  updatedLessonPlan: null,
  updateLessonPlanError: null,
  updateLessonPlanInProgress: false
};

export function lessonPlansReducer(
  state: LessonPlansState = initialState,
  action: fromLessonPlansActions.CollectiveType
): LessonPlansState {
  switch (action.type) {
    case fromLessonPlansActions.Types.CreateLessonPlan: {
      state = {
        ...state,
        createLessonPlanInProgress: true
      };
      break;
    }

    case fromLessonPlansActions.Types.CreateLessonPlanFail: {
      state = {
        ...state,
        createLessonPlanError: action.payload.error,
        createLessonPlanInProgress: false
      };
      break;
    }

    case fromLessonPlansActions.Types.CreateLessonPlanSuccess: {
      state = {
        ...state,
        lessonPlans: {
          data: [
            ...state.lessonPlans.data,
            action.payload
          ],
          recordsCount: state.lessonPlans.recordsCount + 1
        },
        createdLessonPlan: action.payload,
        createLessonPlanInProgress: false
      };
      break;
    }

    case fromLessonPlansActions.Types.DeleteLessonPlan: {
      state = {
        ...state,
        deleteLessonPlanInProgress: true
      };
      break;
    }

    case fromLessonPlansActions.Types.DeleteLessonPlanFail: {
      state = {
        ...state,
        deleteLessonPlanError: action.payload.error,
        deleteLessonPlanInProgress: false
      };
      break;
    }

    case fromLessonPlansActions.Types.DeleteLessonPlanSuccess: {
      state = {
        ...state,
        lessonPlans: {
          data: state.lessonPlans.data.filter(lessonHour => lessonHour.id !== parseInt(action.payload.id, 10)),
          recordsCount: state.lessonPlans.recordsCount - 1
        },
        deletedLessonPlanId: parseInt(action.payload.id, 10),
        deleteLessonPlanInProgress: false
      };
      break;
    }

    case fromLessonPlansActions.Types.GetLessonPlans: {
      state = {
        ...state,
        lessonPlansLoadInProgress: true
      };
      break;
    }

    case fromLessonPlansActions.Types.GetLessonPlansFail: {
      state = {
        ...state,
        lessonPlansLoadError: action.payload.error,
        lessonPlansLoadInProgress: false
      };
      break;
    }

    case fromLessonPlansActions.Types.GetLessonPlansSuccess: {
      state = {
        ...state,
        lessonPlans: {
          data: action.payload.data,
          recordsCount: action.payload.records_count
        }
      };
      break;
    }

    case fromLessonPlansActions.Types.SelectLessonPlan: {
      state = {
        ...state,
        selectedLessonPlan: action.payload
      };
      break;
    }

    case fromLessonPlansActions.Types.UnselectLessonPlan: {
      state = {
        ...state,
        selectedLessonPlan: null
      };
      break;
    }

    case fromLessonPlansActions.Types.UpdateLessonPlan: {
      state = {
        ...state,
        updateLessonPlanInProgress: true
      };
      break;
    }

    case fromLessonPlansActions.Types.UpdateLessonPlanFail: {
      state = {
        ...state,
        updateLessonPlanError: action.payload.error,
        updateLessonPlanInProgress: false
      };
      break;
    }

    case fromLessonPlansActions.Types.UpdateLessonPlanSuccess: {
      state = {
        ...state,
        lessonPlans: {
          ...state.lessonPlans,
          data: state.lessonPlans.data.map(lessonPlan => lessonPlan.id === action.payload.id ? action.payload : lessonPlan)
        },
        updatedLessonPlan: action.payload,
        updateLessonPlanInProgress: false
      };
      break;
    }
  }

  return state;
}
