import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationGuard } from './guards/configuration.guard';
import { SchoolDiaryDataAccessUserModule } from '@school-diary/school-diary/data-access-user';
import { SchoolDiaryFeatureConfigurationRoutingModule } from './school-diary-feature-configuration-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SchoolDiaryDataAccessUserModule,
    SchoolDiaryFeatureConfigurationRoutingModule
  ],
  providers: [ConfigurationGuard]
})
export class SchoolDiaryFeatureConfigurationModule {}
