import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { fromTranslationsActions } from './translations.actions';
import { GetTranslationsGroupActionPayload } from '../payloads/get-translations-group.action-payload';
import { TranslationsPartialState } from './translations.reducer';
import { translationsQuery } from './translations.selectors';

@Injectable()
export class TranslationsFacade {
  translations$ = this.store.pipe(select(translationsQuery.getTranslations));

  constructor(private store: Store<TranslationsPartialState>) {}

  getTranslationsGroup(requestPayload: GetTranslationsGroupActionPayload) {
    this.store.dispatch(new fromTranslationsActions.GetTranslationsGroup(requestPayload));
  }
}
