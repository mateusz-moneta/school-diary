import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';

import { SchoolDiaryDataAccessConfigurationSubjectsModule } from '@school-diary/school-diary/data-access-configuration-subjects';
import { SchoolDiaryFeatureConfigurationSubjectsRoutingModule } from './school-diary-feature-configuration-subjects-routing.module';
import { SchoolDiaryUiSingleControlModule } from '@school-diary/school-diary/ui-single-control';
import { SubjectListComponent } from './containers/subject-list/subject-list.component';
import { MatIconModule } from '@angular/material/icon';
import { NewSubjectComponent } from './containers/new-subject/new-subject.component';
import { SchoolDiaryUiPaginatorModule } from '@school-diary/school-diary/ui-paginator';

@NgModule({
  declarations: [SubjectListComponent, NewSubjectComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    SchoolDiaryDataAccessConfigurationSubjectsModule,
    SchoolDiaryFeatureConfigurationSubjectsRoutingModule,
    SchoolDiaryUiSingleControlModule,
    SchoolDiaryUiSingleControlModule,
    SchoolDiaryUiPaginatorModule,
    TranslateModule.forChild(),
    MatIconModule
  ]
})
export class SchoolDiaryFeatureConfigurationSubjectsModule {}
