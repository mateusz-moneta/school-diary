import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import { fromUserRegistrationActions } from './user-registration.actions';
import { RegisterUserFailPayload } from '../payloads/register-user-fail.payload';
import { RegisterUserSuccessPayload } from '../payloads/register-user-success.payload';
import { UserRegistrationApiService } from '../services/user-registration-api.service';
import { UserRegistrationPartialState } from './user-registration.reducer';

@Injectable()
export class UserRegistrationEffects {

  @Effect()
  registerUser$ = this.dp.pessimisticUpdate(fromUserRegistrationActions.Types.RegisterUser, {
    run: (action: fromUserRegistrationActions.RegisterUser) =>
      this.userRegistrationApiService.register(action.payload)
        .pipe(
          map((payload: RegisterUserSuccessPayload) => new fromUserRegistrationActions.RegisterUserSuccess(payload)),
          tap(() => {
            this.router.navigate(['/login'])
          })
        ),
    onError: (action: fromUserRegistrationActions.RegisterUser, payload: RegisterUserFailPayload) =>
      new fromUserRegistrationActions.RegisterUserFail(payload)
  });

  constructor(
    private actions$: Actions,
    private dp: DataPersistence<UserRegistrationPartialState>,
    private userRegistrationApiService: UserRegistrationApiService,
    private router: Router
  ) {}
}
