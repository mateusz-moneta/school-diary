import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ActionSubjectComponent } from './containers/action-subject/action-subject.component';
import { SubjectsGuard } from './guards/subjects.guard';
import { SubjectListComponent } from './containers/subject-list/subject-list.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [SubjectsGuard],
    children: [
      {
        path: 'list',
        component: SubjectListComponent
      },
      {
        path: 'edit',
        component: ActionSubjectComponent
      },
      {
        path: 'new',
        component: ActionSubjectComponent
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
export class SchoolDiaryFeatureConfigurationSubjectsRoutingModule {}
