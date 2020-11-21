import { createFeatureSelector, createSelector } from '@ngrx/store';

import { USER_SESSION_FEATURE_KEY, UserSessionState } from './user-session.reducer';

// Lookup the 'User' feature state managed by NgRx
const getUserSessionState = createFeatureSelector<UserSessionState>(USER_SESSION_FEATURE_KEY);

const getLoginUser = createSelector(
  getUserSessionState,
  state => state.loginUser
);

const getToken = createSelector(
  getUserSessionState,
  state => state.token
);

const getLoginUserInProgress = createSelector(
  getUserSessionState,
  state => state.loginUserInProgress
);

const isLoginUser = createSelector(
  getUserSessionState,
  state => !!state.loginUser
);

const isLogoutUser = createSelector(
  getUserSessionState,
  state => !state.loginUser
);

export const userSessionQuery = {
  getLoginUser,
  getLoginUserInProgress,
  getToken,
  isLoginUser,
  isLogoutUser
};
