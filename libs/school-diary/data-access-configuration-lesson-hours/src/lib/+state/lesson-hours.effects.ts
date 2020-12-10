import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import { CreateLessonHourFailPayload } from '../payloads/create-lesson-hour-fail.payload';
import { CreateLessonHourSuccessPayload } from '../payloads/create-lesson-hour-success.payload';
import { DeleteLessonHourFailPayload } from '../payloads/delete-lesson-hour-fail.payload';
import { DeleteLessonHourSuccessPayload } from '../payloads/delete-lesson-hour-success.payload';
import { fromLessonHoursActions } from './lesson-hours.actions';
import { GetLessonHourFailPayload } from '../payloads/get-lesson-hour-fail.payload';
import { GetLessonHourSuccessPayload } from '../payloads/get-lesson-hour-success.payload';
import { GetLessonHoursFailPayload } from '../payloads/get-lesson-hours-fail.payload';
import { GetLessonHoursSuccessPayload } from '../payloads/get-lesson-hours-success.payload';
import { LessonHoursApiService } from '../services/lesson-hours-api.service';
import { LessonHoursPartialState } from './lesson-hours.reducer';
import { UpdateLessonHourFailPayload } from '../payloads/update-lesson-hour-fail.payload';
import { UpdateLessonHourSuccessPayload } from '../payloads/update-lesson-hour-success.payload';

@Injectable()
export class LessonHoursEffects {

  @Effect()
  createLessonHour$ = this.dp.pessimisticUpdate(fromLessonHoursActions.Types.CreateLessonHour, {
    run: (action: fromLessonHoursActions.CreateLessonHour) =>
      this.lessonHoursApiService.createLessonHour(action.payload)
        .pipe(
          map((payload: CreateLessonHourSuccessPayload) => new fromLessonHoursActions.CreateLessonHourSuccess(payload)),
          tap(() => {
            this.router.navigate(['/configuration/lesson-hours/list'])
          })
        ),
    onError: (action: fromLessonHoursActions.CreateLessonHour, payload: CreateLessonHourFailPayload) =>
      new fromLessonHoursActions.CreateLessonHourFail(payload)
  });

  @Effect()
  deleteLessonHour$ = this.dp.pessimisticUpdate(fromLessonHoursActions.Types.DeleteLessonHour, {
    run: (action: fromLessonHoursActions.DeleteLessonHour) =>
      this.lessonHoursApiService.deleteLessonHour(action.payload)
        .pipe(
          map((payload: DeleteLessonHourSuccessPayload) => new fromLessonHoursActions.DeleteLessonHourSuccess(payload)),
        ),
    onError: (action: fromLessonHoursActions.DeleteLessonHour, payload: DeleteLessonHourFailPayload) =>
      new fromLessonHoursActions.DeleteLessonHourFail(payload)
  });

  @Effect()
  getLessonHour$ = this.dp.fetch(fromLessonHoursActions.Types.GetLessonHour, {
    run: (action: fromLessonHoursActions.GetLessonHour) =>
      this.lessonHoursApiService.getLessonHour(action.payload)
        .pipe(
          map((payload: GetLessonHourSuccessPayload) => new fromLessonHoursActions.GetLessonHourSuccess(payload))
        ),
    onError: (action: fromLessonHoursActions.GetLessonHour, payload: GetLessonHourFailPayload) =>
      new fromLessonHoursActions.GetLessonHourFail(payload)
  });

  @Effect()
  getLessonHours$ = this.dp.fetch(fromLessonHoursActions.Types.GetLessonHours, {
    run: (action: fromLessonHoursActions.GetLessonHours) =>
      this.lessonHoursApiService.getLessonHours(action.payload)
        .pipe(
          map((payload: GetLessonHoursSuccessPayload) => new fromLessonHoursActions.GetLessonHoursSuccess(payload))
        ),
    onError: (action: fromLessonHoursActions.GetLessonHours, payload: GetLessonHoursFailPayload) =>
      new fromLessonHoursActions.GetLessonHoursFail(payload)
  });

  @Effect()
  updateLessonHour$ = this.dp.pessimisticUpdate(fromLessonHoursActions.Types.UpdateLessonHour, {
    run: (action: fromLessonHoursActions.UpdateLessonHour) =>
      this.lessonHoursApiService.updateLessonHour(action.payload)
        .pipe(
          map((payload: UpdateLessonHourSuccessPayload) => new fromLessonHoursActions.UpdateLessonHourSuccess(payload)),
          tap(() => {
            this.router.navigate(['/configuration/lesson-hours/list'])
          })
        ),
    onError: (action: fromLessonHoursActions.UpdateLessonHour, payload: UpdateLessonHourFailPayload) =>
      new fromLessonHoursActions.UpdateLessonHourFail(payload)
  });

  constructor(
    private actions$: Actions,
    private dp: DataPersistence<LessonHoursPartialState>,
    private lessonHoursApiService: LessonHoursApiService,
    private router: Router
  ) {}
}
