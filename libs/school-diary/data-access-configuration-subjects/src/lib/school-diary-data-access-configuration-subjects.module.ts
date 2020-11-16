import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import * as fromSubjects from './+state/subjects.reducer';
import { SubjectsApiService } from './services/subjects-api.service';
import { SubjectsEffects } from './+state/subjects.effects';
import { SubjectsFacade } from './+state/subjects.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromSubjects.SUBJECTS_FEATURE_KEY,
      fromSubjects.subjectsReducer
    ),
    EffectsModule.forFeature([SubjectsEffects]),
  ],
  providers: [DataPersistence, SubjectsApiService, SubjectsFacade],
})
export class SchoolDiaryDataAccessConfigurationSubjectsModule {}
