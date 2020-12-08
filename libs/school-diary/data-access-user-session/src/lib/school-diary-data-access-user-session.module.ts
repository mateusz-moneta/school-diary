import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { DataPersistence } from '@nrwl/angular';

import { initialState, USER_SESSION_FEATURE_KEY, userSessionReducer } from './+state/user-session.reducer';
import { UserSessionApiService } from './services/user-session-api.service';
import { UserSessionEffects } from './+state/user-session.effects';
import { UserSessionFacade } from './+state/user-session.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(USER_SESSION_FEATURE_KEY, localStorageSync({ keys: ['loginUser', 'loginUserInProgress', 'token'], rehydrate: true })(userSessionReducer), { initialState }),
    EffectsModule.forFeature([UserSessionEffects])
  ],
  providers: [DataPersistence, UserSessionApiService, UserSessionFacade]
})
export class SchoolDiaryDataAccessUserSessionModule {}
