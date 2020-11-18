import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';

import { LESSON_PLANS_FEATURE_KEY, lessonPlansReducer, LessonPlansState } from './lesson-plans.reducer';
import { LessonPlan } from '@school-diary/school-diary/domain';
import { LessonPlansEffects } from './lesson-plans.effects';
import { LessonPlansFacade } from './lesson-plans.facade';

interface TestSchema {
  lessonPlans: LessonPlansState;
}

describe('LessonPlansFacade', () => {
  let facade: LessonPlansFacade;
  let store: Store<TestSchema>;
  const createLessonPlanEntity = (id: number, class_room = {}, class_unit = {}, lesson_hour = {}, subject = {}, work_day = {}, user = {}) =>
    ({
      id,
      class_room,
      class_unit,
      lesson_hour,
      subject,
      work_day,
      user
    } as LessonPlan);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(LESSON_PLANS_FEATURE_KEY, lessonPlansReducer),
          EffectsModule.forFeature([LessonPlansEffects]),
        ],
        providers: [LessonPlansFacade],
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
      facade = TestBed.get(LessonPlansFacade);
    });
  });
});
