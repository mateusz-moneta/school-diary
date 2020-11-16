import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CreateSubjectRequestPayload } from '../request-payloads/create-subject.request-payload';
import { GetSubjectsSuccessPayload } from '../payloads/get-subjects-success.payload';
import { Subject } from '@school-diary/school-diary/domain';

@Injectable()
export class SubjectsApiService {
  readonly endpoints = {
    createSubject: '/api/subject',
    getSubjects: '/api/subject',
  };

  constructor(private httpClient: HttpClient) {}

  createSubject(requestPayload: CreateSubjectRequestPayload): Observable<Subject> {
    return this.httpClient.post<Subject>(this.endpoints.createSubject, requestPayload);
  }

  getSubjects(): Observable<GetSubjectsSuccessPayload[]> {
    return this.httpClient.get<GetSubjectsSuccessPayload[]>(this.endpoints.getSubjects);
  }
}
