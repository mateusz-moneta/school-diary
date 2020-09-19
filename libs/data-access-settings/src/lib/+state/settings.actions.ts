import { createAction, props } from '@ngrx/store';

import { Language } from '@school-diary/shared';

export const changeLanguage = createAction(
  '[Settings] Change Language',
  props<{ language: Language }>()
);
