import { createFeatureSelector, createSelector } from '@ngrx/store';

import { SUBJECTS_FEATURE_KEY, SubjectsState } from './subjects.reducer';

// Lookup the 'Subjects' feature state managed by NgRx
const getSubjectsState = createFeatureSelector<SubjectsState>(SUBJECTS_FEATURE_KEY);

const getSelectedSubject = createSelector(
  getSubjectsState,
  state => state.selectedSubject
);

const getSubjects = createSelector(
  getSubjectsState,
  state => state.subjects
);

const getSubjectsLoadInProgress = createSelector(
  getSubjectsState,
  state => state.subjectsLoadInProgress
);

export const subjectsQuery = {
  getSelectedSubject,
  getSubjects,
  getSubjectsLoadInProgress
};
