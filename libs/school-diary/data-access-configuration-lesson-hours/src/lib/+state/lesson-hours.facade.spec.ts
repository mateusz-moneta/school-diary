import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';

import { CLASS_ROOMS_FEATURE_KEY, lessonHoursReducer, ClassRoomsState } from './class-rooms.reducer';
import { ClassRoom } from '@school-diary/school-diary/domain';
import { LessonHoursEffects } from './class-rooms.effects';
import { ClassRoomsFacade } from '@school-diary/school-diary/data-access-configuration-class-rooms';

interface TestSchema {
  classRooms: ClassRoomsState;
}

describe('LessonHoursFacade', () => {
  let facade: ClassRoomsFacade;
  let store: Store<TestSchema>;
  const createClassRoomEntity = (id: number, designation = '', floor = 0, location = '') =>
    ({
      id,
      designation,
      floor,
      location
    } as ClassRoom);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(CLASS_ROOMS_FEATURE_KEY, lessonHoursReducer),
          EffectsModule.forFeature([LessonHoursEffects]),
        ],
        providers: [ClassRoomsFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(ClassRoomsFacade);
    });
  });
});
