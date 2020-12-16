import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromUsers from './+state/users.reducer';
import { UsersApiService } from './services/users-api.service';
import { UsersEffects } from './+state/users.effects';
import { UsersFacade } from './+state/users.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUsers.USERS_FEATURE_KEY, fromUsers.usersReducer, { initialState: fromUsers.initialState }),
    EffectsModule.forFeature([UsersEffects])
  ],
  providers: [UsersApiService, UsersFacade]
})
export class SchoolDiaryDataAccessUsersModule {}
