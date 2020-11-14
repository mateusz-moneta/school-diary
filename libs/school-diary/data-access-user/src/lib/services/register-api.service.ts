import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RegisterUserRequestPayload } from '../payloads/register-user.request-payload';
import { RegisterUserSuccessPayload } from '../payloads/register-user-success.payload';

@Injectable({
  providedIn: 'root'
})
export class RegisterApiService {
  readonly apiPath = '/api/user/register';

  constructor(private httpClient: HttpClient) {}

  register(registerRequestPayload: RegisterUserRequestPayload): Observable<RegisterUserSuccessPayload> {
    return this.httpClient.post<RegisterUserSuccessPayload>(this.apiPath, registerRequestPayload);
  }
}
