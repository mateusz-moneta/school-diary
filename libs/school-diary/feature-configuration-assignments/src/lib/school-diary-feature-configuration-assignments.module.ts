import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';

import { ActionAssignmentComponent } from './containers/action-assignments/action-assignment.component';
import { AssignmentsGuard } from './guards/assignments.guard';
import { AssignmentsListComponent } from './containers/assignments-list/assignments-list.component';
import { SchoolDiaryDataAccessConfigurationAssignmentsModule } from '@school-diary/school-diary/data-access-configuration-assignments';
import { SchoolDiaryDomainModule } from '@school-diary/school-diary/domain';
import { SchoolDiaryFeatureConfigurationAssignmentsRoutingModule } from './school-diary-feature-configuration-assignments-routing.module';
import { SchoolDiaryUiPaginatorModule } from '@school-diary/school-diary/ui-paginator';
import { SchoolDiaryUiSingleControlModule } from '@school-diary/school-diary/ui-single-control';

@NgModule({
  declarations: [ActionAssignmentComponent, AssignmentsListComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    SchoolDiaryDataAccessConfigurationAssignmentsModule,
    SchoolDiaryDomainModule,
    SchoolDiaryFeatureConfigurationAssignmentsRoutingModule,
    SchoolDiaryUiPaginatorModule,
    SchoolDiaryUiSingleControlModule,
    TranslateModule.forChild()
  ],
  providers: [AssignmentsGuard]
})
export class SchoolDiaryFeatureConfigurationAssignmentsModule {}
