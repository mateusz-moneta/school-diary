import { createAction, props } from '@ngrx/store';

import { Language } from '@school-diary/school-diary/domain';

export const changeLanguage = createAction(
  '[Settings] Change LanguageEnum',
  props<{ language: Language }>()
);
