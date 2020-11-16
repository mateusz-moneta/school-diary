import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginUserRequestPayload } from '../payloads/login-user.request-payload';
import { LoginUserSuccessPayload } from '../payloads/login-user-success.payload';
import { RegisterUserRequestPayload } from '../payloads/register-user.request-payload';
import { RegisterUserSuccessPayload } from '../payloads/register-user-success.payload';

@Injectable()
export class UserApiService {
  readonly endpoints = {
    login: '/api/user/login',
    register: '/api/user/register'
  };

  constructor(private httpClient: HttpClient) {}

  login(loginUserRequestPayload: LoginUserRequestPayload): Observable<LoginUserSuccessPayload> {
    return this.httpClient.post<LoginUserSuccessPayload>(this.endpoints.login, loginUserRequestPayload);
  }

  register(registerRequestPayload: RegisterUserRequestPayload): Observable<RegisterUserSuccessPayload> {
    return this.httpClient.post<RegisterUserSuccessPayload>(this.endpoints.register, registerRequestPayload);
  }
}
