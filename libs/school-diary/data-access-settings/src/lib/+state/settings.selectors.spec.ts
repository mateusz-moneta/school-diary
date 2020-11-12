import { settingsAdapter, initialState } from './settings.reducer';
import * as SettingsSelectors from './settings.selectors';
import { Language } from '@school-diary/school-diary/domain';

describe('Settings Selectors', () => {
  let state;

  beforeEach(() => {
    state = {
      settings: settingsAdapter.setAll(
        [],
        {
          ...initialState,
          language: Language.EN
        }
      ),
    };
  });

  describe('Settings Selectors', () => {
    it('getLanguage() should return the current language', () => {
      const results = SettingsSelectors.getLanguage(state);

      expect(results).toBe(Language.EN);
    });
  });
});
