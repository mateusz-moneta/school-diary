import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  LESSON_HOURS_FEATURE_KEY,
  LessonHoursState
} from './lesson-hours.reducer';

// Lookup the 'LessonHours' feature state managed by NgRx
const getLessonHoursState = createFeatureSelector<LessonHoursState>(LESSON_HOURS_FEATURE_KEY);

const getSelectedLessonHour = createSelector(
  getLessonHoursState,
  state => state.selectedLessonHour
);

const getLessonHours = createSelector(
  getLessonHoursState,
  state => state.lessonHours
);

const getClassRoomsLoadInProgress = createSelector(
  getLessonHoursState,
  state => state.lessonHoursLoadInProgress
);

export const lessonHoursQuery = {
  getSelectedLessonHour,
  getLessonHours,
  getClassRoomsLoadInProgress
};
