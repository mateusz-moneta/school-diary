import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Language } from '@school-diary/shared';
import * as SettingsActions from './settings.actions';
import { SettingsEntity } from './settings.models';

export const SETTINGS_FEATURE_KEY = 'settings';

export interface State extends EntityState<SettingsEntity> {
  language: Language;
}

export interface SettingsPartialState {
  readonly [SETTINGS_FEATURE_KEY]: State;
}

export const settingsAdapter: EntityAdapter<SettingsEntity> = createEntityAdapter<
  SettingsEntity
>();

export const initialState: State = settingsAdapter.getInitialState({
  // set initial required properties
  language: Language.EN
});

const settingsReducer = createReducer(
  initialState,
  on(SettingsActions.changeLanguage, (state, { language }) => ({
    ...state,
    language
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return settingsReducer(state, action);
}
