import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CLASS_UNITS_FEATURE_KEY, ClassUnitsState } from './class-units.reducer';

// Lookup the 'ClassUnits' feature state managed by NgRx
const getClassUnitsState = createFeatureSelector<ClassUnitsState>(CLASS_UNITS_FEATURE_KEY);

const getSelectedClassUnit = createSelector(
  getClassUnitsState,
  state => state.selectedClassUnit
);

const getClassUnits = createSelector(
  getClassUnitsState,
  state => state.classUnits
);

const getClassUnitsLoadInProgress = createSelector(
  getClassUnitsState,
  state => state.classUnitsLoadInProgress
);

export const classUnitsQuery = {
  getSelectedClassUnit,
  getClassUnits,
  getClassUnitsLoadInProgress
};
