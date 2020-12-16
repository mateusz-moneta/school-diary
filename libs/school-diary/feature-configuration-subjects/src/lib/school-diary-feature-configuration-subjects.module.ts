import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ActionSubjectComponent } from './containers/action-subject/action-subject.component';
import { SchoolDiaryDomainModule } from '@school-diary/school-diary/domain';
import { SchoolDiaryFeatureConfigurationSubjectsRoutingModule } from './school-diary-feature-configuration-subjects-routing.module';
import { SchoolDiaryUiPaginatorModule } from '@school-diary/school-diary/ui-paginator';
import { SchoolDiaryUiSingleControlModule } from '@school-diary/school-diary/ui-single-control';
import { SubjectExistGuard } from './guards/subject-exist.guard';
import { SubjectsGuard } from './guards/subjects.guard';
import { SubjectListComponent } from './containers/subject-list/subject-list.component';

@NgModule({
  declarations: [SubjectListComponent, ActionSubjectComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    RouterModule,
    SchoolDiaryDomainModule,
    SchoolDiaryFeatureConfigurationSubjectsRoutingModule,
    SchoolDiaryUiSingleControlModule,
    SchoolDiaryUiSingleControlModule,
    SchoolDiaryUiPaginatorModule,
    TranslateModule.forChild()
  ],
  providers: [SubjectExistGuard, SubjectsGuard]
})
export class SchoolDiaryFeatureConfigurationSubjectsModule {}
