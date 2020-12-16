import { fromTranslationsActions } from './translations.actions';

import { Language } from '@school-diary/school-diary/domain';
import { TranslationCollection } from '../interfaces/translation-collection';
import { HttpErrorResponse } from '@angular/common/http';

export const TRANSLATIONS_FEATURE_KEY = 'translations';

export interface TranslationsState {
  translations: TranslationCollection;
  translationsError: HttpErrorResponse;
  translationsLoadInProgress: boolean;
}

export interface TranslationsPartialState {
  readonly [TRANSLATIONS_FEATURE_KEY]: TranslationsState;
}

export const initialState: TranslationsState = {
  translations: {
    [Language.EN]: null,
    [Language.PL]: null
  },
  translationsError: null,
  translationsLoadInProgress: false
};

export function translationsReducer(
  state: TranslationsState = initialState,
  action: fromTranslationsActions.CollectiveType
): TranslationsState {
  switch (action.type) {
    case fromTranslationsActions.Types.GetTranslationsGroup: {
      state = {
        ...state,
        translationsLoadInProgress: true
      };
      break;
    }

    case fromTranslationsActions.Types.GetTranslationsGroupFail: {
      state = {
        ...state,
        translationsError: action.payload.error
      };
      break;
    }

    case fromTranslationsActions.Types.GetTranslationsGroupSuccess: {
      state = {
        ...state,
        translations: {
          ...state.translations,
          [action.payload.languageCode]: {
            ...state.translations[action.payload.languageCode],
            [action.payload.translationsScope]: action.payload.translationsGroup[action.payload.translationsScope]
          }
        },
        translationsLoadInProgress: false
      };
      break;
    }
  }

  return state;
}
