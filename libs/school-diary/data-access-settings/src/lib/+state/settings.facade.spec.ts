import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';

import { SettingsEffects } from './settings.effects';
import { SettingsFacade } from './settings.facade';
import { SETTINGS_FEATURE_KEY, settingsReducer, SettingsState } from './settings.reducer';

interface TestSchema {
  settings: SettingsState;
}

describe('SettingsFacade', () => {
  let facade: SettingsFacade;
  let store: Store<TestSchema>;

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(SETTINGS_FEATURE_KEY, settingsReducer),
          EffectsModule.forFeature([SettingsEffects]),
        ],
        providers: [SettingsFacade],
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
      facade = TestBed.get(SettingsFacade);
    });
  });
});
