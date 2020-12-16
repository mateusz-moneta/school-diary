import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { fromUserSessionActions } from './user-session.actions';
import { LoginUserRequestPayload } from '../request-payloads/login-user.request-payload';
import { UserSessionPartialState } from './user-session.reducer';
import { userSessionQuery } from './user-session.selectors';

@Injectable()
export class UserSessionFacade {
  getLoginUser$ = this.store.pipe(select(userSessionQuery.getLoginUser));
  getLoginUserType$ = this.store.pipe(select(userSessionQuery.getLoginUserType));
  getLoginUserInProgress$ = this.store.pipe(select(userSessionQuery.getLoginUserInProgress));
  getToken$ = this.store.pipe(select(userSessionQuery.getToken));
  isLoginUser$ = this.store.pipe(select(userSessionQuery.isLoginUser));
  isLogoutUser$ = this.store.pipe(select(userSessionQuery.isLogoutUser));

  constructor(private store: Store<UserSessionPartialState>) {}

  loginUser(loginUserRequestPayload: LoginUserRequestPayload): void {
    this.store.dispatch(new fromUserSessionActions.LoginUser(loginUserRequestPayload));
  }

  logoutUser(): void {
    this.store.dispatch(new fromUserSessionActions.LogoutUser());
  }
}
