import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { ClassRoomsEffects } from './class-rooms.effects';
import { fromClassRoomsActions } from './class-rooms.actions';

describe('ClassRoomsEffects', () => {
  let actions: Observable<any>;
  let effects: ClassRoomsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ClassRoomsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(ClassRoomsEffects);
  });

  describe('loadClassRooms$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new fromClassRoomsActions.GetClassRooms({ page: 1, limit: 10 }) });

      const expected = hot('-a-|', {
        a: new fromClassRoomsActions.GetClassRoomsSuccess({
          data: [],
          records_count: 0
        }),
      });

      expect(effects.getClassRooms$).toBeObservable(expected);
    });
  });
});
