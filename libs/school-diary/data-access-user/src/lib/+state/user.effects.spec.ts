import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { DataPersistence, NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { fromUserActions } from './user.actions';
import { UserEffects } from './user.effects';
import { UserType } from '@school-diary/school-diary/domain';

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
      actions = hot('-a-|', { a: new fromUserActions.LoginUser({ email: 'matiuss12@interia.pl', password: 'ADoORmri'}) });

      const expected = hot('-a-|', {
        a: new fromUserActions.LoginUserSuccess({
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
