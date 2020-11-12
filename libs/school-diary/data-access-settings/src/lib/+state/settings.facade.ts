import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromSettings from './settings.reducer';
import * as SettingsSelectors from './settings.selectors';
import { changeLanguage } from './settings.actions';
import { Language } from '@school-diary/school-diary/domain';

@Injectable()
export class SettingsFacade {
  language$ = this.store.pipe(select(SettingsSelectors.getLanguage));

  constructor(private store: Store<fromSettings.SettingsPartialState>) {}

  changeLanguage(language: Language) {
    this.store.dispatch(changeLanguage({ language }));
  }
}
