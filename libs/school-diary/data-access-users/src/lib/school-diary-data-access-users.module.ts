import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { initialState, USERS_FEATURE_KEY, usersReducer } from './+state/users.reducer';
import { UsersApiService } from './services/users-api.service';
import { UsersEffects } from './+state/users.effects';
import { UsersFacade } from './+state/users.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(USERS_FEATURE_KEY, usersReducer, { initialState }),
    EffectsModule.forFeature([UsersEffects])
  ],
  providers: [UsersApiService, UsersFacade]
})
export class SchoolDiaryDataAccessUsersModule {}
