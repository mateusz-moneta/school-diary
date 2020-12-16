import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';

import { ActionLessonPlanComponent } from './containers/action-lesson-plan/action-lesson-plan.component';
import { LessonPlanExistGuard } from './guards/lesson-plan-exist.guard';
import { LessonPlansGuard } from './guards/lesson-plans.guard';
import { LessonPlansListComponent } from './containers/lesson-plans-list/lesson-plans-list.component';
import { SchoolDiaryDataAccessConfigurationLessonPlansModule } from '@school-diary/school-diary/data-access-configuration-lesson-plans';
import { SchoolDiaryDomainModule } from '@school-diary/school-diary/domain';
import { SchoolDiaryFeatureConfigurationLessonPlansRoutingModule } from './school-diary-feature-configuration-lesson-plans-routing.module';
import { SchoolDiaryUiPaginatorModule } from '@school-diary/school-diary/ui-paginator';
import { SchoolDiaryUiSingleControlModule } from '@school-diary/school-diary/ui-single-control';

@NgModule({
  declarations: [ActionLessonPlanComponent, LessonPlansListComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    SchoolDiaryDataAccessConfigurationLessonPlansModule,
    SchoolDiaryDomainModule,
    SchoolDiaryFeatureConfigurationLessonPlansRoutingModule,
    SchoolDiaryUiPaginatorModule,
    SchoolDiaryUiSingleControlModule,
    TranslateModule.forChild()
  ],
  providers: [LessonPlanExistGuard, LessonPlansGuard]
})
export class SchoolDiaryFeatureConfigurationLessonPlansModule {}
