import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { SchoolDiaryDataAccessSettingsModule } from '@school-diary/school-diary/data-access-settings';
import { SchoolDiaryFeatureSettingsRoutingModule } from './school-diary-feature-settings-routing.module';
import { SchoolDiaryUiCarouselModule } from '@school-diary/school-diary/ui-carousel';
import { SettingsComponent } from './containers/settings/settings.component';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    SchoolDiaryDataAccessSettingsModule,
    SchoolDiaryFeatureSettingsRoutingModule,
    SchoolDiaryUiCarouselModule,
    TranslateModule.forChild()
  ]
})
export class SchoolDiaryFeatureSettingsModule {}
