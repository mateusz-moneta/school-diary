import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';

import { LESSON_HOURS_FEATURE_KEY, lessonHoursReducer, LessonHoursState } from './lesson-hours.reducer';
import { LessonHour } from '@school-diary/school-diary/domain';
import { LessonHoursEffects } from './lesson-hours.effects';
import { LessonHoursFacade } from '@school-diary/school-diary/data-access-configuration-lesson-hours';

interface TestSchema {
  lessonHours: LessonHoursState;
}

describe('LessonHoursFacade', () => {
  let facade: LessonHoursFacade;
  let store: Store<TestSchema>;
  const createLessonHourEntity = (id: number, hour_from = '00', minute_from = '00', hour_to = '00', minute_to = '00') =>
    ({
      id,
      hour_from,
      minute_from,
      hour_to,
      minute_to
    } as LessonHour);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(LESSON_HOURS_FEATURE_KEY, lessonHoursReducer),
          EffectsModule.forFeature([LessonHoursEffects]),
        ],
        providers: [LessonHoursFacade],
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
      facade = TestBed.get(LessonHoursFacade);
    });
  });
});
