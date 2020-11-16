import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import * as fromSettings from './+state/settings.reducer';
import { SettingsEffects } from './+state/settings.effects';
import { SettingsFacade } from './+state/settings.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromSettings.SETTINGS_FEATURE_KEY,
      fromSettings.reducer
    ),
    EffectsModule.forFeature([SettingsEffects])
  ],
  providers: [SettingsFacade]
})
export class SchoolDiaryDataAccessSettingsModule {}
