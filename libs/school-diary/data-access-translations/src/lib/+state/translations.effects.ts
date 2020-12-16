import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, switchMap, take } from 'rxjs/operators';

import { fromTranslationsActions } from './translations.actions';
import { GetTranslationsGroupFailPayload } from '../payloads/get-translations-group-fail.payload';
import { SettingsFacade } from '@school-diary/school-diary/data-access-settings';
import { TranslationsApiService } from '../services/translations-api.service';
import { TranslationsPartialState } from './translations.reducer';
import { TranslationsGroup } from '../interfaces/translations-group.interface';

@Injectable()
export class TranslationsEffects {

  @Effect()
  getTranslationsGroup$ = this.dp.fetch(fromTranslationsActions.Types.GetTranslationsGroup, {
    run: (action: fromTranslationsActions.GetTranslationsGroup) =>
      this.settingsFacade.language$.pipe(
        switchMap(languageCode =>
          this.translationsApiService.getTranslationsGroup({
            languageCode,
            translationsScope: action.payload.translationsScope
          })
          .pipe(
            map((payload: TranslationsGroup) => new fromTranslationsActions.GetTranslationsGroupSuccess({
              translationsGroup: payload,
              translationsScope: action.payload.translationsScope,
              languageCode
            }))
          )
        ),
        take(1)
      ),
    onError: (action: fromTranslationsActions.GetTranslationsGroup, payload: GetTranslationsGroupFailPayload) =>
      new fromTranslationsActions.GetTranslationsGroupFail(payload)
  });

  constructor(
    private actions$: Actions,
    private dp: DataPersistence<TranslationsPartialState>,
    private settingsFacade: SettingsFacade,
    private translationsApiService: TranslationsApiService
  ) {}
}

