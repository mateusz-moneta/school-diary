import { createFeatureSelector, createSelector } from '@ngrx/store';

import { USERS_FEATURE_KEY, UsersState } from './users.reducer';

// Lookup the 'User' feature state managed by NgRx
const getUsersState = createFeatureSelector<UsersState>(USERS_FEATURE_KEY);

const getTeachers = createSelector(
  getUsersState,
  state => state.teachers
);

export const usersQuery = {
  getTeachers
};
