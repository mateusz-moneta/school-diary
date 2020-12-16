import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { SchoolDiaryFeatureSettingsRoutingModule } from './school-diary-feature-settings-routing.module';
import { SchoolDiaryUiCarouselModule } from '@school-diary/school-diary/ui-carousel';
import { SettingsComponent } from './containers/settings/settings.component';
import { SettingsGuard } from './guards/settings.guard';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    SchoolDiaryFeatureSettingsRoutingModule,
    SchoolDiaryUiCarouselModule,
    TranslateModule.forChild()
  ],
  providers: [SettingsGuard]
})
export class SchoolDiaryFeatureSettingsModule {}
