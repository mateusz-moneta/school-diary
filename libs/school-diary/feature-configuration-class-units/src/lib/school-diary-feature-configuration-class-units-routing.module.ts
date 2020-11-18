import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ActionClassUnitComponent } from './containers/action-class-unit/action-class-unit.component';
import { ClassUnitsGuard } from './guards/class-units.guard';
import { ClassUnitsListComponent } from './containers/class-units-list/class-units-list.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [ClassUnitsGuard],
    children: [
      {
        path: 'list',
        component: ClassUnitsListComponent
      },
      {
        path: 'edit',
        component: ActionClassUnitComponent
      },
      {
        path: 'new',
        component: ActionClassUnitComponent
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
export class SchoolDiaryFeatureConfigurationClassUnitsRoutingModule {}
