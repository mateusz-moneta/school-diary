import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { DataPersistence, NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { fromUserSessionActions } from './user-session.actions';
import { UserSessionEffects } from './user-session.effects';
import { UserType } from '@school-diary/school-diary/domain';

describe('UserSessionEffects', () => {
  let actions: Observable<any>;
  let effects: UserSessionEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        UserSessionEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(UserSessionEffects);
  });

  describe('loginUser$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new fromUserSessionActions.LoginUser({ email: 'matiuss12@interia.pl', password: 'ADoORmri'}) });

      const expected = hot('-a-|', {
        a: new fromUserSessionActions.LoginUserSuccess({
          user: {
            id: 1,
            first_name: 'Mateusz',
            last_name: 'Moneta',
            type: UserType.SYSTEM_ADMINISTRATOR,
          },
          token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.JC6qKuH9SG0SIiYSfhZUFTtirxN9Q47buLk0DPFFFzE'
        }),
      });

      expect(effects.loginUser$).toBeObservable(expected);
    });
  });
});
