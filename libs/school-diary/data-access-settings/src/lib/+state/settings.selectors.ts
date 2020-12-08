import { createFeatureSelector, createSelector } from '@ngrx/store';

import { SETTINGS_FEATURE_KEY, SettingsState } from './settings.reducer';

// Lookup the 'Settings' feature state managed by NgRx
const getSettingsState = createFeatureSelector<SettingsState>(SETTINGS_FEATURE_KEY);

const getLanguage = createSelector(
  getSettingsState,
  state => state.language
);

const getSidenavOpened = createSelector(
  getSettingsState,
  state => state.sidenavOpened
);

export const settingsQuery = {
  getLanguage,
  getSidenavOpened
};
