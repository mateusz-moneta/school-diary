import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';

import { ActionClassUnitComponent } from './containers/action-class-unit/action-class-unit.component';
import { ClassUnitsGuard } from './guards/class-units.guard';
import { ClassUnitsListComponent } from './containers/class-units-list/class-units-list.component';
import { SchoolDiaryDataAccessConfigurationClassUnitsModule } from '@school-diary/school-diary/data-access-configuration-class-units';
import { SchoolDiaryDataAccessUsersModule } from '@school-diary/school-diary/data-access-users';
import { SchoolDiaryDomainModule } from '@school-diary/school-diary/domain';
import { SchoolDiaryFeatureConfigurationClassUnitsRoutingModule } from './school-diary-feature-configuration-class-units-routing.module';
import { SchoolDiaryUiPaginatorModule } from '@school-diary/school-diary/ui-paginator';
import { SchoolDiaryUiSingleControlModule } from '@school-diary/school-diary/ui-single-control';

@NgModule({
  declarations: [ActionClassUnitComponent, ClassUnitsListComponent],
  imports: [
    CommonModule,
    SchoolDiaryDomainModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    SchoolDiaryDataAccessConfigurationClassUnitsModule,
    SchoolDiaryDataAccessUsersModule,
    SchoolDiaryFeatureConfigurationClassUnitsRoutingModule,
    SchoolDiaryUiPaginatorModule,
    SchoolDiaryUiSingleControlModule,
    TranslateModule.forChild()
  ],
  providers: [ClassUnitsGuard]
})
export class SchoolDiaryFeatureConfigurationClassUnitsModule {}
