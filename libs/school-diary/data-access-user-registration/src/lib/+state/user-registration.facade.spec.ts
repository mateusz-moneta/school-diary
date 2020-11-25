import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';

import { User, UserType } from '@school-diary/school-diary/domain';
import { UserRegistrationEffects } from './user-registration.effects';
import { UserRegistrationFacade } from './user-registration.facade';
import { USER_REGISTRATION_FEATURE_KEY, userRegistrationReducer, UserRegistrationState } from './user-registration.reducer';

interface TestSchema {
  user: UserRegistrationState;
}

describe('UserRegistrationFacade', () => {
  let facade: UserRegistrationFacade;
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
          StoreModule.forFeature(USER_REGISTRATION_FEATURE_KEY, userRegistrationReducer),
          EffectsModule.forFeature([UserRegistrationEffects]),
        ],
        providers: [UserRegistrationFacade],
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
      facade = TestBed.get(UserRegistrationFacade);
    });
  });
});
