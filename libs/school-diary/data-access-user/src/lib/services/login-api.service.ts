import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginUserRequestPayload } from '../payloads/login-user.request-payload';
import { LoginUserSuccessPayload } from '../payloads/login-user-success.payload';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {
  readonly apiPath = '/api/user/login';

  constructor(private httpClient: HttpClient) {}

  login(loginUserRequestPayload: LoginUserRequestPayload): Observable<LoginUserSuccessPayload> {
    return this.httpClient.post<LoginUserSuccessPayload>(this.apiPath, loginUserRequestPayload);
  }
}
