import { fromSettingsActions } from './settings.actions';

import { Language } from '@school-diary/school-diary/domain';

export const SETTINGS_FEATURE_KEY = 'settings';

export interface SettingsState {
  language: Language;
  sidenavOpened: boolean;
}

export interface SettingsPartialState {
  readonly [SETTINGS_FEATURE_KEY]: SettingsState;
}

export const initialState: SettingsState = {
  language: Language.EN,
  sidenavOpened: false
};

export function settingsReducer(
  state: SettingsState = initialState,
  action: fromSettingsActions.CollectiveType
): SettingsState {
  switch (action.type) {
    case fromSettingsActions.Types.ChangeLanguage: {
      state = {
        ...state,
        language: action.payload
      };
      break;
    }

    case fromSettingsActions.Types.CloseSidenav: {
      state = {
        ...state,
        sidenavOpened: false
      };
      break;
    }

    case fromSettingsActions.Types.OpenSidenav: {
      state = {
        ...state,
        sidenavOpened: true
      };
      break;
    }
  }

  return state;
}
