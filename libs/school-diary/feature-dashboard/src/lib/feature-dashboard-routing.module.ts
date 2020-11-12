import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { FeatureDashboardGuard } from './guards/feature-dashboard.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [FeatureDashboardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureDashboardRoutingModule {}
