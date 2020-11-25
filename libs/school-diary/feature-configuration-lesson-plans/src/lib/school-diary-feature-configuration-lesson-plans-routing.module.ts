import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ActionLessonPlanComponent } from './containers/action-lesson-plan/action-lesson-plan.component';
import { LessonPlansGuard } from './guards/lesson-plans.guard';
import { LessonPlansListComponent } from './containers/lesson-plans-list/lesson-plans-list.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [LessonPlansGuard],
    children: [
      {
        path: 'list',
        component: LessonPlansListComponent
      },
      {
        path: 'edit',
        component: ActionLessonPlanComponent
      },
      {
        path: 'new',
        component: ActionLessonPlanComponent
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
export class SchoolDiaryFeatureConfigurationLessonPlansRoutingModule {}
