import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';

import { ActionClassRoomComponent } from './containers/action-class-room/action-class-room.component';
import { ClassRoomsExistGuard } from './guards/class-rooms-exist.guard';
import { ClassRoomsGuard } from './guards/class-rooms.guard';
import { ClassRoomsListComponent } from './containers/class-rooms-list/class-rooms-list.component';
import { SchoolDiaryDataAccessConfigurationClassRoomsModule } from '@school-diary/school-diary/data-access-configuration-class-rooms';
import { SchoolDiaryDomainModule } from '@school-diary/school-diary/domain';
import { SchoolDiaryFeatureConfigurationClassRoomsRoutingModule } from './school-diary-feature-configuration-class-rooms-routing.module';
import { SchoolDiaryUiPaginatorModule } from '@school-diary/school-diary/ui-paginator';
import { SchoolDiaryUiSingleControlModule } from '@school-diary/school-diary/ui-single-control';

@NgModule({
  declarations: [ClassRoomsListComponent, ActionClassRoomComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    SchoolDiaryDataAccessConfigurationClassRoomsModule,
    SchoolDiaryDomainModule,
    SchoolDiaryFeatureConfigurationClassRoomsRoutingModule,
    SchoolDiaryUiPaginatorModule,
    SchoolDiaryUiSingleControlModule,
    TranslateModule.forChild()
  ],
  providers: [ClassRoomsExistGuard, ClassRoomsGuard]
})
export class SchoolDiaryFeatureConfigurationClassRoomsModule {}
