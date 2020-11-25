import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import { fromUsersActions } from './users.actions';
import { GetStudentsFailPayload } from '../payloads/get-students-fail.payload';
import { GetStudentsSuccessPayload } from '../payloads/get-students-success.payload';
import { GetTeachersFailPayload } from '../payloads/get-teachers-fail.payload';
import { GetTeachersSuccessPayload } from '../payloads/get-teachers-success.payload';
import { UsersApiService } from '../services/users-api.service';
import { UsersPartialState } from './users.reducer';

@Injectable()
export class UsersEffects {

  @Effect()
  getStudents$ = this.dp.fetch(fromUsersActions.Types.GetStudents, {
    run: (action: fromUsersActions.GetStudents) =>
      this.usersApiService.getStudents(action.payload)
        .pipe(
          map((payload: GetStudentsSuccessPayload) => new fromUsersActions.GetStudentsSuccess(payload))
        ),
    onError: (action: fromUsersActions.GetStudents, payload: GetStudentsFailPayload) =>
      new fromUsersActions.GetStudentsFail(payload)
  });

  @Effect()
  getTeachers$ = this.dp.fetch(fromUsersActions.Types.GetTeachers, {
    run: (action: fromUsersActions.GetTeachers) =>
      this.usersApiService.getTeachers(action.payload)
        .pipe(
          map((payload: GetTeachersSuccessPayload) => new fromUsersActions.GetTeachersSuccess(payload))
        ),
    onError: (action: fromUsersActions.GetTeachers, payload: GetTeachersFailPayload) =>
      new fromUsersActions.GetTeachersFail(payload)
  });

  constructor(
    private actions$: Actions,
    private dp: DataPersistence<UsersPartialState>,
    private usersApiService: UsersApiService,
  ) {}
}
