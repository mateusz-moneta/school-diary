import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import * as fromClassRooms from './+state/class-rooms.reducer';
import { ClassRoomsApiService } from './services/class-rooms-api.service';
import { ClassRoomsEffects } from './+state/class-rooms.effects';
import { ClassRoomsFacade } from './+state/class-rooms.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromClassRooms.CLASS_ROOMS_FEATURE_KEY,
      fromClassRooms.classRoomsReducer
    ),
    EffectsModule.forFeature([ClassRoomsEffects]),
  ],
  providers: [ClassRoomsApiService, ClassRoomsFacade, DataPersistence],
})
export class SchoolDiaryDataAccessConfigurationClassRoomsModule {}
