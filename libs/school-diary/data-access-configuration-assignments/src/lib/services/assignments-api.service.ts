import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CreateAssignmentRequestPayload } from '../request-payloads/create-assignment.request-payload';
import { CreateAssignmentSuccessPayload } from '../payloads/create-assignment-success.payload';
import { DeleteAssignmentRequestPayload } from '../request-payloads/delete-assignment.request-payload';
import { DeleteAssignmentSuccessPayload } from '../payloads/delete-assignment-success.payload';
import { GetAssignmentsRequestPayload } from '../request-payloads/get-assignments.request-payload';
import { GetAssignmentsSuccessPayload } from '../payloads/get-assignments-success.payload';
import { UpdateAssignmentRequestPayload } from '../request-payloads/update-assignment.request-payload';
import { UpdateAssignmentSuccessPayload } from '../payloads/update-assignment-success.payload';

@Injectable()
export class AssignmentsApiService {
  readonly endpoints = {
    createAssignment: '/api/configuration/assignments',
    deleteAssignment: '/api/configuration/assignments',
    getAssignments: '/api/configuration/assignments',
    updateAssignment: '/api/configuration/assignments'
  };

  constructor(private httpClient: HttpClient) {}

  createAssignment(requestPayload: CreateAssignmentRequestPayload): Observable<CreateAssignmentSuccessPayload> {
    return this.httpClient.post<CreateAssignmentSuccessPayload>(this.endpoints.createAssignment, requestPayload);
  }

  deleteAssignment(requestPayload: DeleteAssignmentRequestPayload): Observable<DeleteAssignmentSuccessPayload> {
    return this.httpClient.delete<DeleteAssignmentSuccessPayload>(`${this.endpoints.deleteAssignment}/${requestPayload.id}`);
  }

  getAssignments(requestPayload: GetAssignmentsRequestPayload): Observable<GetAssignmentsSuccessPayload> {
    const params = new HttpParams()
      .set('limit', requestPayload.limit.toString())
      .set('page', requestPayload.page.toString());

    return this.httpClient.get<GetAssignmentsSuccessPayload>(this.endpoints.getAssignments, { params });
  }

  updateAssignment(requestPayload: UpdateAssignmentRequestPayload): Observable<UpdateAssignmentSuccessPayload> {
    return this.httpClient.put<UpdateAssignmentSuccessPayload>(`${this.endpoints.updateAssignment}/${requestPayload.id}`, requestPayload);
  }
}
