import { createFeatureSelector, createSelector } from '@ngrx/store';

import { USER_FEATURE_KEY, UserState } from './user.reducer';

// Lookup the 'User' feature state managed by NgRx
const getUserState = createFeatureSelector<UserState>(USER_FEATURE_KEY);

const getLoginUser = createSelector(
  getUserState,
  state => state.loginUser
);

const getLoginUserInProgress = createSelector(
  getUserState,
  state => state.loginUserInProgress
);

const isLogoutUser = createSelector(
  getUserState,
  state => !state.loginUser
);

const getRegisterUser = createSelector(
  getUserState,
  state => state.registerUser
);

const getRegisterUserInProgress = createSelector(
  getUserState,
  state => state.registerUserInProgress
);

export const userQuery = {
  getLoginUser,
  getLoginUserInProgress,
  isLogoutUser,
  getRegisterUser,
  getRegisterUserInProgress
};
