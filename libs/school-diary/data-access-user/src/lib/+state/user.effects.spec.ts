import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { UserEffects } from './user.effects';
import * as UserActions from './user.actions';

describe('UserEffects', () => {
  let actions: Observable<any>;
  let effects: UserEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        UserEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(UserEffects);
  });

  describe('loginUser$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: UserActions.loginUser() });

      const expected = hot('-a-|', {
        a: UserActions.loginUserSuccess({ user: [] }),
      });

      expect(effects.loginUser$).toBeObservable(expected);
    });
  });
});
