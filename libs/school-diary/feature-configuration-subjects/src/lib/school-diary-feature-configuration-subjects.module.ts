import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';

import { ActionSubjectComponent } from './containers/action-subject/action-subject.component';
import { SchoolDiaryDataAccessConfigurationSubjectsModule } from '@school-diary/school-diary/data-access-configuration-subjects';
import { SchoolDiaryDomainModule } from '@school-diary/school-diary/domain';
import { SchoolDiaryFeatureConfigurationSubjectsRoutingModule } from './school-diary-feature-configuration-subjects-routing.module';
import { SchoolDiaryUiPaginatorModule } from '@school-diary/school-diary/ui-paginator';
import { SchoolDiaryUiSingleControlModule } from '@school-diary/school-diary/ui-single-control';
import { SubjectListComponent } from './containers/subject-list/subject-list.component';

@NgModule({
  declarations: [SubjectListComponent, ActionSubjectComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    SchoolDiaryDataAccessConfigurationSubjectsModule,
    SchoolDiaryDomainModule,
    SchoolDiaryFeatureConfigurationSubjectsRoutingModule,
    SchoolDiaryUiSingleControlModule,
    SchoolDiaryUiSingleControlModule,
    SchoolDiaryUiPaginatorModule,
    TranslateModule.forChild()
  ]
})
export class SchoolDiaryFeatureConfigurationSubjectsModule {}
