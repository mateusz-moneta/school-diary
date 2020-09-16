import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as DataAccessLoginActions from './data-access-login.actions';
import { DataAccessLoginEntity } from './data-access-login.models';

export const DATAACCESSLOGIN_FEATURE_KEY = 'dataAccessLogin';

export interface State extends EntityState<DataAccessLoginEntity> {
  selectedId?: string | number; // which DataAccessLogin record has been selected
  loaded: boolean; // has the DataAccessLogin list been loaded
  error?: string | null; // last known error (if any)
}

export interface DataAccessLoginPartialState {
  readonly [DATAACCESSLOGIN_FEATURE_KEY]: State;
}

export const dataAccessLoginAdapter: EntityAdapter<DataAccessLoginEntity> = createEntityAdapter<
  DataAccessLoginEntity
>();

export const initialState: State = dataAccessLoginAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const dataAccessLoginReducer = createReducer(
  initialState,
  on(DataAccessLoginActions.loadDataAccessLogin, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    DataAccessLoginActions.loadDataAccessLoginSuccess,
    (state, { dataAccessLogin }) =>
      dataAccessLoginAdapter.setAll(dataAccessLogin, { ...state, loaded: true })
  ),
  on(DataAccessLoginActions.loadDataAccessLoginFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return dataAccessLoginReducer(state, action);
}
