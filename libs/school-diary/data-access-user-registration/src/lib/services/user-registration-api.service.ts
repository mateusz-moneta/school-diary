import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RegisterUserRequestPayload } from '../request-payloads/register-user.request-payload';
import { RegisterUserSuccessPayload } from '../payloads/register-user-success.payload';

@Injectable()
export class UserRegistrationApiService {
  readonly endpoints = {
    register: '/api/user/registration'
  };

  constructor(private httpClient: HttpClient) {}

  register(registerRequestPayload: RegisterUserRequestPayload): Observable<RegisterUserSuccessPayload> {
    return this.httpClient.post<RegisterUserSuccessPayload>(this.endpoints.register, registerRequestPayload);
  }
}
