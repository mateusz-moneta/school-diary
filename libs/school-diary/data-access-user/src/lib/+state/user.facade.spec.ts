import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';

import { User, UserType } from '@school-diary/school-diary/domain';
import { UserEffects } from './user.effects';
import { UserFacade } from './user.facade';
import { USER_FEATURE_KEY, userReducer, UserState } from './user.reducer';

interface TestSchema {
  user: UserState;
}

describe('UserFacade', () => {
  let facade: UserFacade;
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
          StoreModule.forFeature(USER_FEATURE_KEY, userReducer),
          EffectsModule.forFeature([UserEffects]),
        ],
        providers: [UserFacade],
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
      facade = TestBed.get(UserFacade);
    });
  });
});
