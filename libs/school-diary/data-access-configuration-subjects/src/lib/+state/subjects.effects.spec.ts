import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { SubjectsEffects } from './subjects.effects';
import { fromSubjectsActions } from './subjects.actions';

describe('SubjectsEffects', () => {
  let actions: Observable<any>;
  let effects: SubjectsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        SubjectsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(SubjectsEffects);
  });

  describe('loadSubjects$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new fromSubjectsActions.GetSubjects });

      const expected = hot('-a-|', {
        a: new fromSubjectsActions.GetSubjectsSuccess([]),
      });

      expect(effects.getSubjects$).toBeObservable(expected);
    });
  });
});
