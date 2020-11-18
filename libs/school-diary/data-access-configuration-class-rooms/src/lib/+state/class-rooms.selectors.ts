import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CLASS_ROOMS_FEATURE_KEY, ClassRoomsState } from './class-rooms.reducer';

// Lookup the 'ClassRooms' feature state managed by NgRx
const getClassRoomsState = createFeatureSelector<ClassRoomsState>(CLASS_ROOMS_FEATURE_KEY);

const getSelectedClassRoom = createSelector(
  getClassRoomsState,
  state => state.selectedClassRoom
);

const getClassRooms = createSelector(
  getClassRoomsState,
  state => state.classRooms
);

const getClassRoomsLoadInProgress = createSelector(
  getClassRoomsState,
  state => state.classRoomsLoadInProgress
);

export const classRoomsQuery = {
  getSelectedClassRoom,
  getClassRooms,
  getClassRoomsLoadInProgress
};
