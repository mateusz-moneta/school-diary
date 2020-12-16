import { fromSettingsActions } from './settings.actions';

import { initialState, translationsReducer, SettingsState } from './settings.reducer';
import { Language } from '@school-diary/school-diary/domain';

describe('Settings Reducer', () => {
  beforeEach(() => {});

  describe('valid Settings actions', () => {
    it('changeLanguage should change language', () => {
      const action = new fromSettingsActions.ChangeLanguage(Language.PL);

      const result: SettingsState = translationsReducer(initialState, action);

      expect(result.language).toBe(Language.PL);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = translationsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
