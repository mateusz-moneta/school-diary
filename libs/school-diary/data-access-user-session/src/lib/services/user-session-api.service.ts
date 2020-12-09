import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginUserRequestPayload } from '../request-payloads/login-user.request-payload';
import { LoginUserSuccessPayload } from '../payloads/login-user-success.payload';

@Injectable()
export class UserSessionApiService {
  readonly endpoints = {
    login: '/api/user/session',
    logout: '/api/user/session'
  };

  constructor(private httpClient: HttpClient) {}

  login(loginUserRequestPayload: LoginUserRequestPayload): Observable<LoginUserSuccessPayload> {
    return this.httpClient.post<LoginUserSuccessPayload>(this.endpoints.login, loginUserRequestPayload);
  }

  logout(): Observable<void> {
    return this.httpClient.delete<void>(this.endpoints.logout);
  }
}
