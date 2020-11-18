import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CreateLessonHourRequestPayload } from '../request-payloads/create-lesson-hour.request-payload';
import { CreateLessonHourSuccessPayload } from '../payloads/create-lesson-hour-success.payload';
import { DeleteLessonHourRequestPayload } from '../request-payloads/delete-lesson-hour.request-payload';
import { DeleteLessonHourSuccessPayload } from '../payloads/delete-lesson-hour-success.payload';
import { GetLessonHoursRequestPayload } from '../request-payloads/get-lesson-hours.request-payload';
import { GetLessonHoursSuccessPayload } from '../payloads/get-lesson-hours-success.payload';
import { UpdateLessonHourRequestPayload } from '../request-payloads/update-lesson-hour.request-payload';
import { UpdateLessonHourSuccessPayload } from '../payloads/update-lesson-hour-success.payload';

@Injectable()
export class LessonHoursApiService {
  readonly endpoints = {
    createLessonHour: '/api/lesson_hour',
    deleteLessonHour: '/api/lesson_hour',
    getLessonHours: '/api/lesson_hour',
    updateLessonHour: '/api/lesson_hour'
  };

  constructor(private httpClient: HttpClient) {}

  createLessonHour(requestPayload: CreateLessonHourRequestPayload): Observable<CreateLessonHourSuccessPayload> {
    return this.httpClient.post<CreateLessonHourSuccessPayload>(this.endpoints.createLessonHour, requestPayload);
  }

  deleteLessonHour(requestPayload: DeleteLessonHourRequestPayload): Observable<DeleteLessonHourSuccessPayload> {
    const params = new HttpParams().set('id', requestPayload.id.toString());
    return this.httpClient.delete<DeleteLessonHourSuccessPayload>(this.endpoints.deleteLessonHour, { params });
  }

  getLessonHours(requestPayload: GetLessonHoursRequestPayload): Observable<GetLessonHoursSuccessPayload> {
    const params = new HttpParams()
      .set('limit', requestPayload.limit.toString())
      .set('page', requestPayload.page.toString());

    return this.httpClient.get<GetLessonHoursSuccessPayload>(this.endpoints.getLessonHours, { params });
  }

  updateLessonHour(requestPayload: UpdateLessonHourRequestPayload): Observable<UpdateLessonHourSuccessPayload> {
    return this.httpClient.put<UpdateLessonHourSuccessPayload>(this.endpoints.updateLessonHour, requestPayload);
  }
}
