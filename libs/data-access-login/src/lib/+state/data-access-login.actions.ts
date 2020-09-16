import { createAction, props } from '@ngrx/store';
import { DataAccessLoginEntity } from './data-access-login.models';

export const loadDataAccessLogin = createAction(
  '[DataAccessLogin] Load DataAccessLogin'
);

export const loadDataAccessLoginSuccess = createAction(
  '[DataAccessLogin] Load DataAccessLogin Success',
  props<{ dataAccessLogin: DataAccessLoginEntity[] }>()
);

export const loadDataAccessLoginFailure = createAction(
  '[DataAccessLogin] Load DataAccessLogin Failure',
  props<{ error: any }>()
);
