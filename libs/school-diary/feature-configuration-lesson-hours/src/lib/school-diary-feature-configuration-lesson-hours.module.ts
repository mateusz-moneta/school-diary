import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';

import { ActionLessonHourComponent } from './containers/action-lesson-hour/action-lesson-hour.component';
import { LessonHoursGuard } from './guards/lesson-hours.guard';
import { LessonHoursListComponent } from './containers/lesson-hours-list/lesson-hours-list.component';
import { SchoolDiaryDataAccessConfigurationLessonHoursModule } from '@school-diary/school-diary/data-access-configuration-lesson-hours';
import { SchoolDiaryDomainModule } from '@school-diary/school-diary/domain';
import { SchoolDiaryFeatureConfigurationLessonHoursRoutingModule } from './school-diary-feature-configuration-lesson-hours-routing.module';
import { SchoolDiaryUiSingleControlModule } from '@school-diary/school-diary/ui-single-control';
import { SchoolDiaryUiPaginatorModule } from '@school-diary/school-diary/ui-paginator';

@NgModule({
  declarations: [ActionLessonHourComponent, LessonHoursListComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    SchoolDiaryDataAccessConfigurationLessonHoursModule,
    SchoolDiaryDomainModule,
    SchoolDiaryFeatureConfigurationLessonHoursRoutingModule,
    SchoolDiaryUiSingleControlModule,
    SchoolDiaryUiPaginatorModule,
    TranslateModule.forChild()
  ],
  providers: [LessonHoursGuard]
})
export class SchoolDiaryFeatureConfigurationLessonHoursModule {}
