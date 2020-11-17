import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { fromLessonHoursActions } from './lesson-hours.actions';
import { LessonHoursEffects } from './lesson-hours.effects';

describe('ClassRoomsEffects', () => {
  let actions: Observable<any>;
  let effects: LessonHoursEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        LessonHoursEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(LessonHoursEffects);
  });

  describe('loadLessonHours$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new fromLessonHoursActions.GetLessonHours({ page: 1, limit: 10 }) });

      const expected = hot('-a-|', {
        a: new fromLessonHoursActions.GetLessonHoursSuccess({
          data: [],
          records_count: 0
        }),
      });

      expect(effects.getLessonHours$).toBeObservable(expected);
    });
  });
});
