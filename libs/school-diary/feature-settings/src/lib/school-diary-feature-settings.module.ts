import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

import { SchoolDiaryFeatureSettingsRoutingModule } from './school-diary-feature-settings-routing.module';
import { SchoolDiaryUiCarouselModule } from '@school-diary/school-diary/ui-carousel';
import { SettingsComponent } from './containers/settings/settings.component';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    SchoolDiaryFeatureSettingsRoutingModule,
    SchoolDiaryUiCarouselModule,
    TranslateModule.forChild()
  ]
})
export class SchoolDiaryFeatureSettingsModule {}
