import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { SchoolDiaryDataAccessSettingsModule } from '@school-diary/school-diary/data-access-settings'
import { SchoolDiaryFeatureDashboardRoutingModule } from './school-diary-feature-dashboard-routing.module';
import { PanelCardComponent } from './components/panel-card/panel-card.component';
import { SchoolDiaryUiSidenavModule } from '@school-diary/school-diary/ui-sidenav';
import { SchoolDiaryUiToolbarModule } from '@school-diary/school-diary/ui-toolbar';
import { SchoolDiarySharedModule } from '@school-diary/school-diary/shared';

@NgModule({
  imports: [
    CommonModule,
    SchoolDiaryDataAccessSettingsModule,
    SchoolDiaryFeatureDashboardRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    SchoolDiaryUiSidenavModule,
    SchoolDiaryUiToolbarModule,
    SchoolDiarySharedModule,
    TranslateModule.forChild()
  ],
  declarations: [DashboardComponent, PanelCardComponent]
})
export class SchoolDiaryFeatureDashboardModule {}
