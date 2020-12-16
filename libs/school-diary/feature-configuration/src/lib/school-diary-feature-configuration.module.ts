import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationGuard } from './guards/configuration.guard';
import { SchoolDiaryDataAccessConfigurationClassRoomsModule } from '@school-diary/school-diary/data-access-configuration-class-rooms';
import { SchoolDiaryDataAccessConfigurationClassUnitsModule } from '@school-diary/school-diary/data-access-configuration-class-units';
import { SchoolDiaryDataAccessConfigurationLessonHoursModule } from '@school-diary/school-diary/data-access-configuration-lesson-hours';
import { SchoolDiaryDataAccessConfigurationSubjectsModule } from '@school-diary/school-diary/data-access-configuration-subjects';
import { SchoolDiaryDataAccessUsersModule } from '@school-diary/school-diary/data-access-users';
import { SchoolDiaryFeatureConfigurationRoutingModule } from './school-diary-feature-configuration-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SchoolDiaryDataAccessConfigurationClassRoomsModule,
    SchoolDiaryDataAccessConfigurationClassUnitsModule,
    SchoolDiaryDataAccessConfigurationLessonHoursModule,
    SchoolDiaryDataAccessConfigurationSubjectsModule,
    SchoolDiaryDataAccessUsersModule,
    SchoolDiaryFeatureConfigurationRoutingModule
  ],
  providers: [ConfigurationGuard]
})
export class SchoolDiaryFeatureConfigurationModule {}
