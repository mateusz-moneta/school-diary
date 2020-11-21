import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';

import { User, UserType } from '@school-diary/school-diary/domain';
import { UserSessionEffects } from './users.effects';
import { UserSessionFacade } from './users.facade';
import { USERS_FEATURE_KEY, userSessionReducer, UsersState } from './users.reducer';

interface TestSchema {
  user: UsersState;
}

describe('UserRegistrationFacade', () => {
  let facade: UserSessionFacade;
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
          StoreModule.forFeature(USERS_FEATURE_KEY, userSessionReducer),
          EffectsModule.forFeature([UserSessionEffects]),
        ],
        providers: [UserSessionFacade],
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
      facade = TestBed.get(UserSessionFacade);
    });
  });
});
