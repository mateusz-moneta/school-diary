import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationGuard } from './guards/configuration.guard';
import { SchoolDiaryDataAccessUserSessionModule } from '@school-diary/school-diary/data-access-user-session';
import { SchoolDiaryFeatureConfigurationRoutingModule } from './school-diary-feature-configuration-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SchoolDiaryDataAccessUserSessionModule,
    SchoolDiaryFeatureConfigurationRoutingModule
  ],
  providers: [ConfigurationGuard]
})
export class SchoolDiaryFeatureConfigurationModule {}
