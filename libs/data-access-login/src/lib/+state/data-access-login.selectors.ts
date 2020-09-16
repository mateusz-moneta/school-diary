import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  DATAACCESSLOGIN_FEATURE_KEY,
  State,
  DataAccessLoginPartialState,
  dataAccessLoginAdapter,
} from './data-access-login.reducer';

// Lookup the 'DataAccessLogin' feature state managed by NgRx
export const getDataAccessLoginState = createFeatureSelector<
  DataAccessLoginPartialState,
  State
>(DATAACCESSLOGIN_FEATURE_KEY);

const { selectAll, selectEntities } = dataAccessLoginAdapter.getSelectors();

export const getDataAccessLoginLoaded = createSelector(
  getDataAccessLoginState,
  (state: State) => state.loaded
);

export const getDataAccessLoginError = createSelector(
  getDataAccessLoginState,
  (state: State) => state.error
);

export const getAllDataAccessLogin = createSelector(
  getDataAccessLoginState,
  (state: State) => selectAll(state)
);

export const getDataAccessLoginEntities = createSelector(
  getDataAccessLoginState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getDataAccessLoginState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getDataAccessLoginEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
