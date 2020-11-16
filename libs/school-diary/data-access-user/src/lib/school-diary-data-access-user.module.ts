import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { initialState, USER_FEATURE_KEY, userReducer } from './+state/user.reducer';
import { UserApiService } from './services/user-api.service';
import { UserEffects } from './+state/user.effects';
import { UserFacade } from './+state/user.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(USER_FEATURE_KEY, userReducer, { initialState }),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [UserApiService, UserFacade],
})
export class SchoolDiaryDataAccessUserModule {}
