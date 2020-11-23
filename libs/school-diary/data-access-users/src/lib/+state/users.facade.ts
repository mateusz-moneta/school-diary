import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { fromUsersActions } from './users.actions';
import { GetStudentsRequestPayload } from '../request-payloads/get-students.request-payload';
import { GetTeachersRequestPayload } from '../request-payloads/get-teachers.request-payload';
import { UsersPartialState } from './users.reducer';
import { usersQuery } from './users.selectors';

@Injectable()
export class UsersFacade {
  students$ = this.store.pipe(select(usersQuery.getStudents));
  teachers$ = this.store.pipe(select(usersQuery.getTeachers));

  constructor(private store: Store<UsersPartialState>) {}

  getStudents(getStudentsRequestPayload: GetStudentsRequestPayload = { unassigned: true, page: 1, limit: 10 }): void {
    this.store.dispatch(new fromUsersActions.GetStudents(getStudentsRequestPayload));
  }

  getTeachers(getTeachersRequestPayload: GetTeachersRequestPayload = { page: 1, limit: 10 }): void {
    this.store.dispatch(new fromUsersActions.GetTeachers(getTeachersRequestPayload));
  }
}
