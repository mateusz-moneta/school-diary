import { createAction, props } from '@ngrx/store';
import { UserEntity } from './user.models';

export const loginUser = createAction('[User] Login User');

export const loginUserSuccess = createAction(
  '[User] Login User Success',
  props<{ user: UserEntity[] }>()
);

export const loginUserFailure = createAction(
  '[User] Login User Failure',
  props<{ error: any }>()
);
