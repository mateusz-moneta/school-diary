import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { fromUserActions } from './user.actions';
import { LoginUserRequestPayload } from '../payloads/login-user.request-payload';
import { RegisterUserRequestPayload } from '../payloads/register-user.request-payload';
import { UserPartialState } from './user.reducer';
import { userQuery } from './user.selectors';

@Injectable()
export class UserFacade {
  getLoginUser$ = this.store.pipe(select(userQuery.getLoginUser));
  getLoginUserInProgress$ = this.store.pipe(select(userQuery.getLoginUserInProgress));
  isLogoutUser$ = this.store.pipe(select(userQuery.isLogoutUser));
  getRegisterUser$ = this.store.pipe(select(userQuery.getRegisterUser));
  getRegisterUserInProgress$ = this.store.pipe(select(userQuery.getRegisterUserInProgress));

  constructor(private store: Store<UserPartialState>) {}

  loginUser(loginUserRequestPayload: LoginUserRequestPayload): void {
    this.store.dispatch(new fromUserActions.LoginUser(loginUserRequestPayload));
  }

  registerUser(registerUserRequestPayload: RegisterUserRequestPayload): void {
    this.store.dispatch(new fromUserActions.RegisterUser(registerUserRequestPayload));
  }
}
