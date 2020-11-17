import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';

import { Subject } from '@school-diary/school-diary/domain';
import { SubjectsEffects } from './subjects.effects';
import { SubjectsFacade } from './subjects.facade';
import {
  SUBJECTS_FEATURE_KEY,
  SubjectsState,
  initialState,
  subjectsReducer,
} from './subjects.reducer';

interface TestSchema {
  subjects: SubjectsState;
}

describe('SubjectsFacade', () => {
  let facade: SubjectsFacade;
  let store: Store<TestSchema>;
  const createSubjectEntity = (id: number, name = '', short_name = '', created_at = '', updated_at = '') =>
    ({
      id,
      name,
      short_name,
      created_at,
      updated_at
    } as Subject);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(SUBJECTS_FEATURE_KEY, subjectsReducer),
          EffectsModule.forFeature([SubjectsEffects]),
        ],
        providers: [SubjectsFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(SubjectsFacade);
    });
  });
});
