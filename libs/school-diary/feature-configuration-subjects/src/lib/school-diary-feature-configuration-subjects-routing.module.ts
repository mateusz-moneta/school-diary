import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NewSubjectComponent } from './containers/new-subject/new-subject.component';
import { SubjectListComponent } from './containers/subject-list/subject-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: SubjectListComponent
  },
  {
    path: 'new',
    component: NewSubjectComponent
  },
  {
    path: '',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolDiaryFeatureConfigurationSubjectsRoutingModule {}
