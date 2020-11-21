import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GetTeachersRequestPayload } from '../request-payloads/get-teachers.request-payload';
import { UserType } from '@school-diary/school-diary/domain';

@Injectable()
export class UsersApiService {
  readonly endpoints = {
    getUsers: '/api/users'
  };

  constructor(private httpClient: HttpClient) {}

  getTeachers(requestPayload: GetTeachersRequestPayload): Observable<any> {
    const params = new HttpParams()
      .set('type', UserType.TEACHER)
      .set('limit', requestPayload.limit.toString())
      .set('page', requestPayload.page.toString());

    return this.httpClient.get<any>(this.endpoints.getUsers, { params });
  }
}
