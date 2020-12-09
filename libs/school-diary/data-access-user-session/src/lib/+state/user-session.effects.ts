import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import { fromUserSessionActions } from './user-session.actions';
import { LoginUserFailPayload } from '../payloads/login-user-fail.payload';
import { LoginUserSuccessPayload } from '../payloads/login-user-success.payload';
import { UserSessionApiService } from '../services/user-session-api.service';
import { UserSessionPartialState } from './user-session.reducer';

@Injectable()
export class UserSessionEffects {

  @Effect()
  loginUser$ = this.dp.pessimisticUpdate(fromUserSessionActions.Types.LoginUser, {
    run: (action: fromUserSessionActions.LoginUser) =>
      this.userSessionApiService.login(action.payload)
        .pipe(
          map((payload: LoginUserSuccessPayload) => new fromUserSessionActions.LoginUserSuccess(payload)),
          tap(() => {
            this.router.navigate(['/dashboard'])
          })
        ),
    onError: (action: fromUserSessionActions.LoginUser, payload: LoginUserFailPayload) =>
      new fromUserSessionActions.LoginUserFail(payload)
  });

  @Effect()
  logoutUser$ = this.dp.pessimisticUpdate(fromUserSessionActions.Types.LogoutUser, {
    run: () =>
      this.userSessionApiService.logout()
        .pipe(
          map(() => new fromUserSessionActions.LogoutUserSuccess()),
          tap(() => {
            this.router.navigate(['/login'])
          })
        ),
    onError: () => new fromUserSessionActions.LogoutUserFail()
  });

  constructor(
    private actions$: Actions,
    private dp: DataPersistence<UserSessionPartialState>,
    private userSessionApiService: UserSessionApiService,
    private router: Router
  ) {}
}
