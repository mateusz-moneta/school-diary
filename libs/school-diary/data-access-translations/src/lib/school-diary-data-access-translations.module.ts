import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import * as fromTranslations from './+state/translations.reducer';
import { TranslationsApiService } from './services/translations-api.service';
import { TranslationsEffects } from './+state/translations.effects';
import { TranslationsFacade } from './+state/translations.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromTranslations.TRANSLATIONS_FEATURE_KEY,
      fromTranslations.translationsReducer
    ),
    EffectsModule.forFeature([TranslationsEffects]),
  ],
  providers: [DataPersistence, TranslationsApiService, TranslationsFacade],
})
export class SchoolDiaryDataAccessTranslationsModule {}
