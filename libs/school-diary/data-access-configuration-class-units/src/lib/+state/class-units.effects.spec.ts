import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { ClassUnitsEffects } from './class-units.effects';
import { fromClassUnitsActions } from './class-units.actions';

describe('ClassUnitsEffects', () => {
  let actions: Observable<any>;
  let effects: ClassUnitsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ClassUnitsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(ClassUnitsEffects);
  });

  describe('loadClassUnits$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new fromClassUnitsActions.GetClassUnits({ page: 1, limit: 10 }) });

      const expected = hot('-a-|', {
        a: new fromClassUnitsActions.GetClassUnitsSuccess({
          data: [],
          records_count: 0
        }),
      });

      expect(effects.getClassRooms$).toBeObservable(expected);
    });
  });
});
