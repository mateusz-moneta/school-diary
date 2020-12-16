import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TRANSLATIONS_FEATURE_KEY, TranslationsState } from './translations.reducer';

// Lookup the 'Translations' feature state managed by NgRx
const getTranslationsState = createFeatureSelector<TranslationsState>(TRANSLATIONS_FEATURE_KEY);

const getTranslations = createSelector(
  getTranslationsState,
  state => state.translations
);

export const translationsQuery = {
  getTranslations
};
