import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  LESSON_PLANS_FEATURE_KEY,
  LessonPlansState
} from './lesson-plans.reducer';

// Lookup the 'LessonPlans' feature state managed by NgRx
const getLessonPlansState = createFeatureSelector<LessonPlansState>(LESSON_PLANS_FEATURE_KEY);

const getSelectedLessonPlan = createSelector(
  getLessonPlansState,
  state => state.selectedLessonPlan
);

const getLessonPlans = createSelector(
  getLessonPlansState,
  state => state.lessonPlans
);

const getClassPlansLoadInProgress = createSelector(
  getLessonPlansState,
  state => state.lessonPlansLoadInProgress
);

export const lessonPlansQuery = {
  getSelectedLessonPlan,
  getLessonPlans,
  getClassPlansLoadInProgress
};
