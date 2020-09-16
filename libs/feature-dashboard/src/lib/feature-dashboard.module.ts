import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { FeatureDashboardRoutingModule } from './feature-dashboard-routing.module';
import { SharedModule } from '@school-diary/shared';

@NgModule({
  imports: [CommonModule, FeatureDashboardRoutingModule, SharedModule],
  declarations: [DashboardComponent],
})
export class FeatureDashboardModule {}
