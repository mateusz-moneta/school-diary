import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardGuard } from './guards/dashboard.guard';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { SchoolDiaryDataAccessSettingsModule } from '@school-diary/school-diary/data-access-settings';
import { SchoolDiaryDataAccessUserSessionModule } from '@school-diary/school-diary/data-access-user-session';
import { SchoolDiaryFeatureDashboardRoutingModule } from './school-diary-feature-dashboard-routing.module';
import { SchoolDiarySharedModule } from '@school-diary/school-diary/shared';
import { SchoolDiaryUiSidenavModule } from '@school-diary/school-diary/ui-sidenav';
import { SchoolDiaryUiToolbarModule } from '@school-diary/school-diary/ui-toolbar';
import { PanelCardComponent } from './components/panel-card/panel-card.component';

@NgModule({
  declarations: [DashboardComponent, PanelCardComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    SchoolDiaryDataAccessSettingsModule,
    SchoolDiaryDataAccessUserSessionModule,
    SchoolDiaryFeatureDashboardRoutingModule,
    SchoolDiarySharedModule,
    SchoolDiaryUiSidenavModule,
    SchoolDiaryUiToolbarModule,
    TranslateModule.forChild()
  ],
  providers: [DashboardGuard]
})
export class SchoolDiaryFeatureDashboardModule {}
