import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CreateSubjectRequestPayload } from '../request-payloads/create-subject.request-payload';
import { CreateSubjectSuccessPayload } from '../payloads/create-subject-success.payload';
import { DeleteSubjectRequestPayload } from '../request-payloads/delete-subject.request-payload';
import { DeleteSubjectSuccessPayload } from '../payloads/delete-subject-success.payload';
import { GetSubjectsRequestPayload } from '../request-payloads/get-subjects.request-payload';
import { GetSubjectsSuccessPayload } from '../payloads/get-subjects-success.payload';
import { UpdateSubjectRequestPayload } from '../request-payloads/update-subject.request-payload';
import { UpdateSubjectSuccessPayload } from '../payloads/update-subject-success.payload';

@Injectable()
export class SubjectsApiService {
  readonly endpoints = {
    createSubject: '/api/subject',
    deleteSubject: '/api/subject',
    getSubjects: '/api/subject',
    updateSubject: '/api/subject'
  };

  constructor(private httpClient: HttpClient) {}

  createSubject(requestPayload: CreateSubjectRequestPayload): Observable<CreateSubjectSuccessPayload> {
    return this.httpClient.post<CreateSubjectSuccessPayload>(this.endpoints.createSubject, requestPayload);
  }

  deleteSubject(requestPayload: DeleteSubjectRequestPayload): Observable<DeleteSubjectSuccessPayload> {
    const params = new HttpParams().set('id', requestPayload.id.toString());
    return this.httpClient.delete<DeleteSubjectSuccessPayload>(this.endpoints.deleteSubject, { params });
  }

  getSubjects(requestPayload: GetSubjectsRequestPayload): Observable<GetSubjectsSuccessPayload> {
    const params = new HttpParams()
      .set('limit', requestPayload.limit.toString())
      .set('page', requestPayload.page.toString());

    return this.httpClient.get<GetSubjectsSuccessPayload>(this.endpoints.getSubjects, { params });
  }

  updateSubject(requestPayload: UpdateSubjectRequestPayload): Observable<UpdateSubjectSuccessPayload> {
    return this.httpClient.put<UpdateSubjectSuccessPayload>(this.endpoints.updateSubject, requestPayload);
  }
}
