import { Language } from '@school-diary/school-diary/domain';
import * as SettingsActions from './settings.actions';
import { State, initialState, reducer } from './settings.reducer';

describe('Settings Reducer', () => {
  beforeEach(() => {});

  describe('valid Settings actions', () => {
    it('changeLanguage should change language', () => {
      const action = SettingsActions.changeLanguage({ language: Language.PL });

      const result: State = reducer(initialState, action);

      expect(result.language).toBe(Language.PL);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
