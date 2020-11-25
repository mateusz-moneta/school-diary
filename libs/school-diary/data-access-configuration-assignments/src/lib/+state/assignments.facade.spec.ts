import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';

import { Assignment } from '@school-diary/school-diary/domain';
import { AssignmentsEffects } from './assignments.effects';
import { AssignmentsFacade } from './assignments.facade';
import { ASSIGNMENTS_FEATURE_KEY, AssignmentsState } from './assignments.reducer';
import { assignmentsReducer } from './assignments.reducer';


interface TestSchema {
  assignments: AssignmentsState;
}

describe('AssignmentsFacade', () => {
  let facade: AssignmentsFacade;
  let store: Store<TestSchema>;
  const createAssignmentEntity = (id: number, class_unit = {}, user = {}) =>
    ({
      id,
      class_unit,
      user
    } as Assignment);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(ASSIGNMENTS_FEATURE_KEY, assignmentsReducer),
          EffectsModule.forFeature([AssignmentsEffects]),
        ],
        providers: [AssignmentsFacade],
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
      facade = TestBed.get(AssignmentsFacade);
    });
  });
});
