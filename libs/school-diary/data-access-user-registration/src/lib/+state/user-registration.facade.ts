import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { fromUserRegistrationActions } from './user-registration.actions';
import { RegisterUserRequestPayload } from '../request-payloads/register-user.request-payload';
import { UserRegistrationPartialState } from './user-registration.reducer';
import { userRegistrationQuery } from './user-registration.selectors';

@Injectable()
export class UserRegistrationFacade {
  getRegisterUser$ = this.store.pipe(select(userRegistrationQuery.getRegisterUser));
  getRegisterUserInProgress$ = this.store.pipe(select(userRegistrationQuery.getRegisterUserInProgress));

  constructor(private store: Store<UserRegistrationPartialState>) {}

  registerUser(registerUserRequestPayload: RegisterUserRequestPayload): void {
    this.store.dispatch(new fromUserRegistrationActions.RegisterUser(registerUserRequestPayload));
  }
}
