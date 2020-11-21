import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import * as fromUserRegistration from './+state/user-registration.reducer';
import { UserRegistrationApiService } from './services/user-registration-api.service';
import { UserRegistrationEffects } from './+state/user-registration.effects';
import { UserRegistrationFacade } from './+state/user-registration.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromUserRegistration.USER_REGISTRATION_FEATURE_KEY,
      fromUserRegistration.userRegistrationReducer
    ),
    EffectsModule.forFeature([UserRegistrationEffects])
  ],
  providers: [DataPersistence, UserRegistrationApiService, UserRegistrationFacade]
})
export class SchoolDiaryDataAccessUserRegistrationModule {}
