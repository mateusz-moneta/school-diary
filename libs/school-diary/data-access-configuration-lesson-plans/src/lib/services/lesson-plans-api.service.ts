import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CreateLessonPlanRequestPayload } from '../request-payloads/create-lesson-plan.request-payload';
import { CreateLessonPlanSuccessPayload } from '../payloads/create-lesson-plan-success.payload';
import { DeleteLessonPlanRequestPayload } from '../request-payloads/delete-lesson-plan.request-payload';
import { DeleteLessonPlanSuccessPayload } from '../payloads/delete-lesson-plan-success.payload';
import { GetLessonPlansRequestPayload } from '../request-payloads/get-lesson-plans.request-payload';
import { GetLessonPlansSuccessPayload } from '../payloads/get-lesson-plans-success.payload';
import { UpdateLessonPlanRequestPayload } from '../request-payloads/update-lesson-plan.request-payload';
import { UpdateLessonPlanSuccessPayload } from '../payloads/update-lesson-plan-success.payload';

@Injectable()
export class LessonPlansApiService {
  readonly endpoints = {
    createLessonPlan: '/api/lesson_hour',
    deleteLessonPlan: '/api/lesson_hour',
    getLessonPlans: '/api/lesson_hour',
    updateLessonPlan: '/api/lesson_hour'
  };

  constructor(private httpClient: HttpClient) {}

  createLessonPlan(requestPayload: CreateLessonPlanRequestPayload): Observable<CreateLessonPlanSuccessPayload> {
    return this.httpClient.post<CreateLessonPlanSuccessPayload>(this.endpoints.createLessonPlan, requestPayload);
  }

  deleteLessonPlan(requestPayload: DeleteLessonPlanRequestPayload): Observable<DeleteLessonPlanSuccessPayload> {
    const params = new HttpParams().set('id', requestPayload.id.toString());
    return this.httpClient.delete<DeleteLessonPlanSuccessPayload>(this.endpoints.deleteLessonPlan, { params });
  }

  getLessonPlans(requestPayload: GetLessonPlansRequestPayload): Observable<GetLessonPlansSuccessPayload> {
    const params = new HttpParams()
      .set('limit', requestPayload.limit.toString())
      .set('page', requestPayload.page.toString());

    return this.httpClient.get<GetLessonPlansSuccessPayload>(this.endpoints.getLessonPlans, { params });
  }

  updateLessonPlan(requestPayload: UpdateLessonPlanRequestPayload): Observable<UpdateLessonPlanSuccessPayload> {
    return this.httpClient.put<UpdateLessonPlanSuccessPayload>(this.endpoints.updateLessonPlan, requestPayload);
  }
}