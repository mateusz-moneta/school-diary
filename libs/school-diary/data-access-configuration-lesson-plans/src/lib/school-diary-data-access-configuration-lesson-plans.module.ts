import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import * as fromLessonPlans from './+state/lesson-plans.reducer';
import { LessonPlansApiService } from './services/lesson-plans-api.service';
import { LessonPlansEffects } from './+state/lesson-plans.effects';
import { LessonPlansFacade } from './+state/lesson-plans.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromLessonPlans.LESSON_PLANS_FEATURE_KEY,
      fromLessonPlans.lessonPlansReducer
    ),
    EffectsModule.forFeature([LessonPlansEffects]),
  ],
  providers: [DataPersistence, LessonPlansApiService, LessonPlansFacade]
})
export class SchoolDiaryDataAccessConfigurationLessonPlansModule {}
