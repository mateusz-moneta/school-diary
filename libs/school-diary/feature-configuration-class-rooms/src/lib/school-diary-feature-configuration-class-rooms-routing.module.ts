import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ActionClassRoomComponent } from './containers/action-class-room/action-class-room.component';
import { ClassRoomsExistGuard } from './guards/class-rooms-exist.guard';
import { ClassRoomsGuard } from './guards/class-rooms.guard';
import { ClassRoomsListComponent } from './containers/class-rooms-list/class-rooms-list.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [ClassRoomsGuard],
    children: [
      {
        path: 'list',
        component: ClassRoomsListComponent
      },
      {
        path: 'edit/:id',
        component: ActionClassRoomComponent,
        canActivate: [ClassRoomsExistGuard]
      },
      {
        path: 'new',
        component: ActionClassRoomComponent
      },
      {
        path: '',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolDiaryFeatureConfigurationClassRoomsRoutingModule {}
