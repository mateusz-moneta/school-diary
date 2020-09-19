import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { DataAccessSettingsModule } from '@school-diary/data-access-settings'
import { FeatureDashboardRoutingModule } from './feature-dashboard-routing.module';
import { PanelCardComponent } from './components/panel-card/panel-card.component';
import { SharedModule } from '@school-diary/shared';;

@NgModule({
  imports: [
    CommonModule,
    DataAccessSettingsModule,
    FeatureDashboardRoutingModule,
    SharedModule
  ],
  declarations: [DashboardComponent, PanelCardComponent]
})
export class FeatureDashboardModule {}
