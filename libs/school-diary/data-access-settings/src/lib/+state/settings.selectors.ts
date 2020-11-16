import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  SETTINGS_FEATURE_KEY,
  State,
  SettingsPartialState
} from './settings.reducer';

// Lookup the 'Settings' feature state managed by NgRx
export const getSettingsState = createFeatureSelector<
  SettingsPartialState,
  State
>(SETTINGS_FEATURE_KEY);

export const getLanguage = createSelector(
  getSettingsState,
  (state: State) => state.language
);
