import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';

import { TranslationsEffects } from './translations.effects';
import { TranslationsFacade } from './translations.facade';
import { TRANSLATIONS_FEATURE_KEY, translationsReducer, TranslationsState } from './translations.reducer';

interface TestSchema {
  translations: TranslationsState;
}

describe('TranslationsFacade', () => {
  let facade: TranslationsFacade;
  let store: Store<TestSchema>;

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(TRANSLATIONS_FEATURE_KEY, translationsReducer),
          EffectsModule.forFeature([TranslationsEffects]),
        ],
        providers: [TranslationsFacade],
      })
      class CustomFeatureModule {
      }

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {
      }

      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(TranslationsFacade);
    });
  });
});
