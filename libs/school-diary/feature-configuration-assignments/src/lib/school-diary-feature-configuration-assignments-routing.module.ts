import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ActionAssignmentComponent } from './containers/action-assignments/action-assignment.component';
import { AssignmentsGuard } from './guards/assignments.guard';
import { AssignmentsListComponent } from './containers/assignments-list/assignments-list.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AssignmentsGuard],
    children: [
      {
        path: 'list',
        component: AssignmentsListComponent
      },
      {
        path: 'edit',
        component: ActionAssignmentComponent
      },
      {
        path: 'new',
        component: ActionAssignmentComponent
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
export class SchoolDiaryFeatureConfigurationAssignmentsRoutingModule {}