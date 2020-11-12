import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { LoginRequestPayload } from '../interfaces/login-request.payload';
import { User } from '@school-diary/school-diary/domain';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {
  readonly apiPath = '/api/user/login';

  constructor(private httpClient: HttpClient) {}

  login(loginRequestPayload: LoginRequestPayload): Observable<User> {
    return this.httpClient.post<User>(this.apiPath, loginRequestPayload);
  }
}
