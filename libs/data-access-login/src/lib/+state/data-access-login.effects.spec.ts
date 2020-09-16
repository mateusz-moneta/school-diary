import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { DataAccessLoginEffects } from './data-access-login.effects';
import * as DataAccessLoginActions from './data-access-login.actions';

describe('DataAccessLoginEffects', () => {
  let actions: Observable<any>;
  let effects: DataAccessLoginEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        DataAccessLoginEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(DataAccessLoginEffects);
  });

  describe('loadDataAccessLogin$', () => {
    it('should work', () => {
      actions = hot('-a-|', {
        a: DataAccessLoginActions.loadDataAccessLogin(),
      });

      const expected = hot('-a-|', {
        a: DataAccessLoginActions.loadDataAccessLoginSuccess({
          dataAccessLogin: [],
        }),
      });

      expect(effects.loadDataAccessLogin$).toBeObservable(expected);
    });
  });
});
