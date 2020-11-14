import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { pessimisticUpdate } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import { fromUserActions } from './user.actions';
import { LoginApiService } from '../services/login-api.service';
import { LoginUserFailPayload } from '../payloads/login-user-fail.payload';
import { LoginUserSuccessPayload } from '../payloads/login-user-success.payload';
import { RegisterApiService } from '../services/register-api.service';
import { RegisterUserFailPayload } from '../payloads/register-user-fail.payload';
import { RegisterUserSuccessPayload } from '../payloads/register-user-success.payload';

@Injectable()
export class UserEffects {
  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUserActions.Types.LoginUser),
      pessimisticUpdate({
        run: (action: fromUserActions.LoginUser) => this.loginApiService.login(action.payload)
          .pipe(
            map((payload: LoginUserSuccessPayload) => new fromUserActions.LoginUserSuccess(payload)),
            tap(() => {
              this.router.navigate(['/dashboard'])
            })
          ),
        onError: (action: fromUserActions.LoginUser, payload: LoginUserFailPayload) =>
          new fromUserActions.LoginUserFail(payload)
      })
    )
  );

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromUserActions.Types.RegisterUser),
      pessimisticUpdate({
        run: (action: fromUserActions.RegisterUser) => this.registerApiService.register(action.payload)
          .pipe(
            map((payload: RegisterUserSuccessPayload) => new fromUserActions.RegisterUserSuccess(payload))
          ),
        onError: (action: fromUserActions.RegisterUser, payload: RegisterUserFailPayload) =>
          new fromUserActions.RegisterUserFail(payload)
      })
    )
  );

  constructor(
    private actions$: Actions,
    private loginApiService: LoginApiService,
    private registerApiService: RegisterApiService,
    private router: Router
  ) {}
}
