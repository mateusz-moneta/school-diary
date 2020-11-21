import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import { fromUsersActions } from './users.actions';
import { GetTeachersSuccessPayload } from '../payloads/get-teachers-success.payload';
import { GetTeachersFailPayload } from '../payloads/get-teachers-fail.payload';
import { UsersApiService } from '../services/users-api.service';
import { UsersPartialState } from './users.reducer';

@Injectable()
export class UsersEffects {

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
