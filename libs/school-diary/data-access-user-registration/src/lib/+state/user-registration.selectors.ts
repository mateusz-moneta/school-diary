import { createFeatureSelector, createSelector } from '@ngrx/store';

import { USER_REGISTRATION_FEATURE_KEY, UserRegistrationState } from './user-registration.reducer';

// Lookup the 'UserRegistration' feature state managed by NgRx
const getUserRegistrationState = createFeatureSelector<UserRegistrationState>(USER_REGISTRATION_FEATURE_KEY);

const getRegisterUser = createSelector(
  getUserRegistrationState,
  state => state.registerUser
);

const getRegisterUserInProgress = createSelector(
  getUserRegistrationState,
  state => state.registerUserInProgress
);

export const userRegistrationQuery = {
  getRegisterUser,
  getRegisterUserInProgress
};
