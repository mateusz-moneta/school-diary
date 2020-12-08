import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { fromSettingsActions } from './settings.actions';
import { Language } from '@school-diary/school-diary/domain';
import { SettingsPartialState } from './settings.reducer';
import { settingsQuery } from './settings.selectors';

@Injectable()
export class SettingsFacade {
  language$ = this.store.pipe(select(settingsQuery.getLanguage));
  sidenavOpened$ = this.store.pipe(select(settingsQuery.getSidenavOpened));

  constructor(private store: Store<SettingsPartialState>) {}

  changeLanguage(language: Language) {
    this.store.dispatch(new fromSettingsActions.ChangeLanguage(language));
  }

  closeSidenav() {
    this.store.dispatch(new fromSettingsActions.CloseSidenav());
  }

  openSidenav() {
    this.store.dispatch(new fromSettingsActions.OpenSidenav());
  }
}
