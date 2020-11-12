import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { DataAccessSettingsModule } from '@school-diary/school-diary/data-access-settings'
import { FeatureDashboardRoutingModule } from './feature-dashboard-routing.module';
import { PanelCardComponent } from './components/panel-card/panel-card.component';
import { SharedModule } from '@school-diary/school-diary/shared';

@NgModule({
  imports: [
    CommonModule,
    DataAccessSettingsModule,
    FeatureDashboardRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    SharedModule,
    TranslateModule.forChild()
  ],
  declarations: [DashboardComponent, PanelCardComponent]
})
export class FeatureDashboardModule {}
