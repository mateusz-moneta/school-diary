import { HttpErrorResponse } from '@angular/common/http';

import { ClassRoom } from '@school-diary/school-diary/domain';
import { ClassRoomsCollection } from '../interfaces/class-rooms-collection.interface';
import { fromClassRoomsActions } from './class-rooms.actions';

export const CLASS_ROOMS_FEATURE_KEY = 'classRooms';

export interface ClassRoomsState {
  classRooms: ClassRoomsCollection;
  classRoomsLoadError: HttpErrorResponse;
  classRoomsLoadInProgress: boolean;
  createdClassRoom: ClassRoom;
  createClassRoomError: HttpErrorResponse;
  createClassRoomInProgress: boolean;
  deletedClassRoomId: number;
  deleteClassRoomError: HttpErrorResponse;
  deleteClassRoomInProgress: boolean;
  selectedClassRoom: ClassRoom;
  updatedClassRoom: ClassRoom;
  updateClassRoomError: HttpErrorResponse;
  updateClassRoomInProgress: boolean;
}

export interface ClassRoomsPartialState {
  readonly [CLASS_ROOMS_FEATURE_KEY]: ClassRoomsState;
}

export const initialState: ClassRoomsState = {
  classRooms: null,
  classRoomsLoadError: null,
  classRoomsLoadInProgress: false,
  createdClassRoom: null,
  createClassRoomError: null,
  createClassRoomInProgress: false,
  deletedClassRoomId: null,
  deleteClassRoomError: null,
  deleteClassRoomInProgress: false,
  selectedClassRoom: null,
  updatedClassRoom: null,
  updateClassRoomError: null,
  updateClassRoomInProgress: false
};

export function classRoomsReducer(
  state: ClassRoomsState = initialState,
  action: fromClassRoomsActions.CollectiveType
): ClassRoomsState {
  switch (action.type) {
    case fromClassRoomsActions.Types.CreateClassRoom: {
      state = {
        ...state,
        createClassRoomInProgress: true
      };
      break;
    }

    case fromClassRoomsActions.Types.CreateClassRoomFail: {
      state = {
        ...state,
        createClassRoomError: action.payload.error,
        createClassRoomInProgress: false
      };
      break;
    }

    case fromClassRoomsActions.Types.CreateClassRoomSuccess: {
      state = {
        ...state,
        createdClassRoom: action.payload,
        createClassRoomInProgress: false
      };
      break;
    }

    case fromClassRoomsActions.Types.DeleteClassRoom: {
      state = {
        ...state,
        deleteClassRoomInProgress: true
      };
      break;
    }

    case fromClassRoomsActions.Types.DeleteClassRoomFail: {
      state = {
        ...state,
        deleteClassRoomError: action.payload.error,
        deleteClassRoomInProgress: false
      };
      break;
    }

    case fromClassRoomsActions.Types.DeleteClassRoomSuccess: {
      state = {
        ...state,
        classRooms: {
          data: state.classRooms.data.filter(classRoom => classRoom.id !== parseInt(action.payload.id, 10)),
          recordsCount: state.classRooms.recordsCount - 1
        },
        deletedClassRoomId: parseInt(action.payload.id, 10),
        deleteClassRoomInProgress: false
      };
      break;
    }

    case fromClassRoomsActions.Types.GetClassRooms: {
      state = {
        ...state,
        classRoomsLoadInProgress: true
      };
      break;
    }

    case fromClassRoomsActions.Types.GetClassRoomsFail: {
      state = {
        ...state,
        classRoomsLoadError: action.payload.error,
        classRoomsLoadInProgress: false
      };
      break;
    }

    case fromClassRoomsActions.Types.GetClassRoomsSuccess: {
      state = {
        ...state,
        classRooms: {
          data: action.payload.data,
          recordsCount: action.payload.records_count
        }
      };
      break;
    }

    case fromClassRoomsActions.Types.SelectClassRoom: {
      state = {
        ...state,
        selectedClassRoom: action.payload
      };
      break;
    }

    case fromClassRoomsActions.Types.UnselectClassRoom: {
      state = {
        ...state,
        selectedClassRoom: null
      };
      break;
    }

    case fromClassRoomsActions.Types.UpdateClassRoom: {
      state = {
        ...state,
        updateClassRoomInProgress: true
      };
      break;
    }

    case fromClassRoomsActions.Types.UpdateClassRoomFail: {
      state = {
        ...state,
        updateClassRoomError: action.payload.error,
        updateClassRoomInProgress: false
      };
      break;
    }

    case fromClassRoomsActions.Types.UpdateClassRoomSuccess: {
      state = {
        ...state,
        classRooms: {
          ...state.classRooms,
          data: state.classRooms.data.map(classRoom => classRoom.id === action.payload.id ? action.payload : classRoom)
        },
        updatedClassRoom: action.payload,
        updateClassRoomInProgress: false
      };
      break;
    }
  }

  return state;
}
