import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';

import { User, UserType } from '@school-diary/school-diary/domain';
import { UsersEffects } from './users.effects';
import { UsersFacade } from './users.facade';
import { USERS_FEATURE_KEY, usersReducer, UsersState } from './users.reducer';

interface TestSchema {
  user: UsersState;
}

describe('UsersFacade', () => {
  let facade: UsersFacade;
  let store: Store<TestSchema>;

  const createUserEntity = (id: number, first_name = '', last_name = '', type = UserType.STUDENT) =>
    ({
      id,
      first_name,
      last_name,
      type
    } as User);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(USERS_FEATURE_KEY, usersReducer),
          EffectsModule.forFeature([UsersEffects]),
        ],
        providers: [UsersFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(UsersFacade);
    });
  });
});
