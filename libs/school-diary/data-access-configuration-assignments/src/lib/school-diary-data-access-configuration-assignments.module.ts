import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { AssignmentsEffects } from './+state/assignments.effects';
import * as fromAssignments from './+state/assignments.reducer';
import { AssignmentsApiService } from './services/assignments-api.service';
import { AssignmentsFacade } from './+state/assignments.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromAssignments.ASSIGNMENTS_FEATURE_KEY,
      fromAssignments.assignmentsReducer
    ),
    EffectsModule.forFeature([AssignmentsEffects]),
  ],
  providers: [AssignmentsApiService, AssignmentsFacade, DataPersistence]
})
export class SchoolDiaryDataAccessConfigurationAssignmentsModule {}
