import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { initialState, USER_SESSION_FEATURE_KEY, userSessionReducer } from './+state/user-session.reducer';
import { UserSessionApiService } from './services/user-session-api.service';
import { UserSessionEffects } from './+state/user-session.effects';
import { UserSessionFacade } from './+state/user-session.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(USER_SESSION_FEATURE_KEY, userSessionReducer, { initialState }),
    EffectsModule.forFeature([UserSessionEffects])
  ],
  providers: [DataPersistence, UserSessionApiService, UserSessionFacade]
})
export class SchoolDiaryDataAccessUserSessionModule {}
