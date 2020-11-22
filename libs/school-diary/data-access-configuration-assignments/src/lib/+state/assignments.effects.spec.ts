import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { AssignmentsEffects } from './assignments.effects';
import { fromAssignmentsActions } from './assignments.actions';

describe('ClassRoomsEffects', () => {
  let actions: Observable<any>;
  let effects: AssignmentsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        AssignmentsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(AssignmentsEffects);
  });

  describe('loadClassRooms$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new fromAssignmentsActions.GetAssignments({ page: 1, limit: 10 }) });

      const expected = hot('-a-|', {
        a: new fromAssignmentsActions.GetAssignmentsSuccess({
          data: [],
          records_count: 0
        }),
      });

      expect(effects.getClassRooms$).toBeObservable(expected);
    });
  });
});
