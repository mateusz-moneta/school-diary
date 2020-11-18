import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ActionLessonHourComponent } from './containers/action-lesson-hour/action-lesson-hour.component';
import { LessonHoursGuard } from './guards/lesson-hours.guard';
import { LessonHoursListComponent } from './containers/lesson-hours-list/lesson-hours-list.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [LessonHoursGuard],
    children: [
      {
        path: 'list',
        component: LessonHoursListComponent
      },
      {
        path: 'edit',
        component: ActionLessonHourComponent
      },
      {
        path: 'new',
        component: ActionLessonHourComponent
      },
      {
        path: '',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolDiaryFeatureConfigurationLessonHoursRoutingModule {}
