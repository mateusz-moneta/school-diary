import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { fromLessonPlansActions } from './lesson-plans.actions';
import { LessonPlansEffects } from './lesson-plans.effects';

describe('LessonPlansEffects', () => {
  let actions: Observable<any>;
  let effects: LessonPlansEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        LessonPlansEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(LessonPlansEffects);
  });

  describe('loadLessonPlans$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new fromLessonPlansActions.GetLessonPlans({ page: 1, limit: 10 }) });

      const expected = hot('-a-|', {
        a: new fromLessonPlansActions.GetLessonPlansSuccess({
          data: [],
          records_count: 0
        }),
      });

      expect(effects.getLessonPlans$).toBeObservable(expected);
    });
  });
});
