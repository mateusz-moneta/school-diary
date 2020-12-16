import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { DataPersistence } from '@nrwl/angular';

import * as fromSession from './+state/user-session.reducer';
import { UserSessionApiService } from './services/user-session-api.service';
import { UserSessionEffects } from './+state/user-session.effects';
import { UserSessionFacade } from './+state/user-session.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromSession.USER_SESSION_FEATURE_KEY, localStorageSync({ keys: ['loginUser', 'loginUserInProgress', 'token'], rehydrate: true })(fromSession.userSessionReducer), { initialState: fromSession.initialState }),
    EffectsModule.forFeature([UserSessionEffects])
  ],
  providers: [DataPersistence, UserSessionApiService, UserSessionFacade]
})
export class SchoolDiaryDataAccessUserSessionModule {}
