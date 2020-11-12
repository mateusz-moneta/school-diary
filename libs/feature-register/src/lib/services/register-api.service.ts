import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RegisterRequestPayload } from '../interfaces/register-request.payload';
import { User } from '@school-diary/shared';

@Injectable({
  providedIn: 'root'
})
export class RegisterApiService {
  readonly apiPath = '/api/user/register';

  constructor(private httpClient: HttpClient) {}

  register(registerRequestPayload: RegisterRequestPayload): Observable<User> {
    return this.httpClient.post<User>(this.apiPath, registerRequestPayload);
  }
}
