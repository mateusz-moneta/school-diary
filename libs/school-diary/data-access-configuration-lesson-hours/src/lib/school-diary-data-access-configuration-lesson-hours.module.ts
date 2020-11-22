import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import * as fromLessonHours from './+state/lesson-hours.reducer';
import { LessonHoursApiService } from './services/lesson-hours-api.service';
import { LessonHoursEffects } from './+state/lesson-hours.effects';
import { LessonHoursFacade } from './+state/lesson-hours.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromLessonHours.LESSON_HOURS_FEATURE_KEY,
      fromLessonHours.lessonHoursReducer
    ),
    EffectsModule.forFeature([LessonHoursEffects])
  ],
  providers: [DataPersistence, LessonHoursApiService, LessonHoursFacade]
})
export class SchoolDiaryDataAccessConfigurationLessonHoursModule {}
