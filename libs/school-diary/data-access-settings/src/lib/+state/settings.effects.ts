import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { fromSettingsActions } from './settings.actions';
import { LanguageService } from '@school-diary/school-diary/shared';
import { SettingsPartialState } from './settings.reducer';

@Injectable()
export class SettingsEffects {

  @Effect()
  changeLanguage$ = this.dp.optimisticUpdate(fromSettingsActions.Types.ChangeLanguage, {
    run: (action: fromSettingsActions.ChangeLanguage) => {
      this.languageService.setLanguage(action.payload);
    },
    undoAction: () => null
  });

  constructor(
    private actions$: Actions,
    private dp: DataPersistence<SettingsPartialState>,
    private languageService: LanguageService
  ) {}
}

