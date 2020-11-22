import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ASSIGNMENTS_FEATURE_KEY, AssignmentsState } from './assignments.reducer';

// Lookup the 'Assignments' feature state managed by NgRx
const getAssignmentsState = createFeatureSelector<AssignmentsState>(ASSIGNMENTS_FEATURE_KEY);

const getSelectedAssignment = createSelector(
  getAssignmentsState,
  state => state.selectedAssignment
);

const getAssignments = createSelector(
  getAssignmentsState,
  state => state.assignments
);

const getAssignmentsLoadInProgress = createSelector(
  getAssignmentsState,
  state => state.assignmentsLoadInProgress
);

export const assignmentsQuery = {
  getSelectedAssignment,
  getAssignments,
  getAssignmentsLoadInProgress
};
