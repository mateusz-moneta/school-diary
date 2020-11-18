import { HttpErrorResponse } from '@angular/common/http';

import { ClassUnit } from '@school-diary/school-diary/domain';
import { ClassUnitsCollection } from '../interfaces/class-units-collection.interface';
import { fromClassUnitsActions } from './class-units.actions';

export const CLASS_UNITS_FEATURE_KEY = 'classUnits';

export interface ClassUnitsState {
  classUnits: ClassUnitsCollection;
  classUnitsLoadError: HttpErrorResponse;
  classUnitsLoadInProgress: boolean;
  createdClassUnit: ClassUnit;
  createClassUnitError: HttpErrorResponse;
  createClassUnitInProgress: boolean;
  deletedClassUnitId: number;
  deleteClassUnitError: HttpErrorResponse;
  deleteClassUnitInProgress: boolean;
  selectedClassUnit: ClassUnit;
  updatedClassUnit: ClassUnit;
  updateClassUnitError: HttpErrorResponse;
  updateClassUnitInProgress: boolean;
}

export interface ClassUnitsPartialState {
  readonly [CLASS_UNITS_FEATURE_KEY]: ClassUnitsState;
}

export const initialState: ClassUnitsState = {
  classUnits: null,
  classUnitsLoadError: null,
  classUnitsLoadInProgress: false,
  createdClassUnit: null,
  createClassUnitError: null,
  createClassUnitInProgress: false,
  deletedClassUnitId: null,
  deleteClassUnitError: null,
  deleteClassUnitInProgress: false,
  selectedClassUnit: null,
  updatedClassUnit: null,
  updateClassUnitError: null,
  updateClassUnitInProgress: false
};

export function classUnitsReducer(
  state: ClassUnitsState = initialState,
  action: fromClassUnitsActions.CollectiveType
): ClassUnitsState {
  switch (action.type) {
    case fromClassUnitsActions.Types.CreateClassUnit: {
      state = {
        ...state,
        createClassUnitInProgress: true
      };
      break;
    }

    case fromClassUnitsActions.Types.CreateClassUnitFail: {
      state = {
        ...state,
        createClassUnitError: action.payload.error,
        createClassUnitInProgress: false
      };
      break;
    }

    case fromClassUnitsActions.Types.CreateClassUnitSuccess: {
      state = {
        ...state,
        classUnits: {
          data: [
            ...state.classUnits.data,
            action.payload
          ],
          recordsCount: state.classUnits.recordsCount + 1
        },
        createdClassUnit: action.payload,
        createClassUnitInProgress: false
      };
      break;
    }

    case fromClassUnitsActions.Types.DeleteClassUnit: {
      state = {
        ...state,
        deleteClassUnitInProgress: true
      };
      break;
    }

    case fromClassUnitsActions.Types.DeleteClassUnitFail: {
      state = {
        ...state,
        deleteClassUnitError: action.payload.error,
        deleteClassUnitInProgress: false
      };
      break;
    }

    case fromClassUnitsActions.Types.DeleteClassUnitSuccess: {
      state = {
        ...state,
        classUnits: {
          data: state.classUnits.data.filter(classRoom => classRoom.id !== parseInt(action.payload.id, 10)),
          recordsCount: state.classUnits.recordsCount - 1
        },
        deletedClassUnitId: parseInt(action.payload.id, 10),
        deleteClassUnitInProgress: false
      };
      break;
    }

    case fromClassUnitsActions.Types.GetClassUnits: {
      state = {
        ...state,
        classUnitsLoadInProgress: true
      };
      break;
    }

    case fromClassUnitsActions.Types.GetClassUnitsFail: {
      state = {
        ...state,
        classUnitsLoadError: action.payload.error,
        classUnitsLoadInProgress: false
      };
      break;
    }

    case fromClassUnitsActions.Types.GetClassUnitsSuccess: {
      state = {
        ...state,
        classUnits: {
          data: action.payload.data,
          recordsCount: action.payload.records_count
        }
      };
      break;
    }

    case fromClassUnitsActions.Types.SelectClassUnit: {
      state = {
        ...state,
        selectedClassUnit: action.payload
      };
      break;
    }

    case fromClassUnitsActions.Types.UnselectClassUnit: {
      state = {
        ...state,
        selectedClassUnit: null
      };
      break;
    }

    case fromClassUnitsActions.Types.UpdateClassUnit: {
      state = {
        ...state,
        updateClassUnitInProgress: true
      };
      break;
    }

    case fromClassUnitsActions.Types.UpdateClassUnitFail: {
      state = {
        ...state,
        updateClassUnitError: action.payload.error,
        updateClassUnitInProgress: false
      };
      break;
    }

    case fromClassUnitsActions.Types.UpdateClassUnitSuccess: {
      state = {
        ...state,
        classUnits: {
          ...state.classUnits,
          data: state.classUnits.data.map(classRoom => classRoom.id === action.payload.id ? action.payload : classRoom)
        },
        updatedClassUnit: action.payload,
        updateClassUnitInProgress: false
      };
      break;
    }
  }

  return state;
}
