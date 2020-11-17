import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ActionClassRoomComponent } from './containers/action-class-room/action-class-room.component';
import { ClassRoomsListComponent } from './containers/class-rooms-list/class-rooms-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: ClassRoomsListComponent
  },
  {
    path: 'edit',
    component: ActionClassRoomComponent
  },
  {
    path: 'new',
    component: ActionClassRoomComponent
  },
  {
    path: '',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolDiaryFeatureConfigurationClassRoomsRoutingModule {}
