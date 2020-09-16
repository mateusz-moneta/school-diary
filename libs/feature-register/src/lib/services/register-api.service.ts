import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RegisterData } from '@school-diary/shared';

@Injectable({
  providedIn: 'root'
})
export class RegisterApiService {
  readonly apiPath = 'api/users/register';

  constructor(private httpClient: HttpClient) {}

  register(registerData: RegisterData): Observable<void> {
    return this.httpClient.post<void>(this.apiPath, registerData);
  }
}
