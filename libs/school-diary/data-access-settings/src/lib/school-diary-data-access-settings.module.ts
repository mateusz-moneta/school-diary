import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

import * as fromSettings from './+state/settings.reducer';
import { SettingsEffects } from './+state/settings.effects';
import { SettingsFacade } from './+state/settings.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromSettings.SETTINGS_FEATURE_KEY, localStorageSync({ keys: ['language', 'sidenavOpened'], rehydrate: true })(fromSettings.settingsReducer), { initialState: fromSettings.initialState }),
    EffectsModule.forFeature([SettingsEffects])
  ],
  providers: [SettingsFacade]
})
export class SchoolDiaryDataAccessSettingsModule {}
