import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import { CreateLessonPlanFailPayload } from '../payloads/create-lesson-plan-fail.payload';
import { CreateLessonPlanSuccessPayload } from '../payloads/create-lesson-plan-success.payload';
import { DeleteLessonPlanFailPayload } from '../payloads/delete-lesson-plan-fail.payload';
import { DeleteLessonPlanSuccessPayload } from '../payloads/delete-lesson-plan-success.payload';
import { fromLessonHoursActions } from './lesson-plans.actions';
import { GetLessonPlansFailPayload } from '../payloads/get-lesson-plans-fail.payload';
import { GetLessonPlansSuccessPayload } from '../payloads/get-lesson-plans-success.payload';
import { LessonPlansApiService } from '../services/lesson-plans-api.service';
import { LessonHoursPartialState } from './lesson-plans.reducer';
import { UpdateLessonPlanFailPayload } from '../payloads/update-lesson-plan-fail.payload';
import { UpdateLessonPlanSuccessPayload } from '../payloads/update-lesson-plan-success.payload';

@Injectable()
export class LessonPlansEffects {

  @Effect()
  createLessonPlan$ = this.dp.pessimisticUpdate(fromLessonHoursActions.Types.CreateLessonPlan, {
    run: (action: fromLessonHoursActions.CreateLessonPlan) =>
      this.lessonPlansApiService.createLessonPlan(action.payload)
        .pipe(
          map((payload: CreateLessonPlanSuccessPayload) => new fromLessonHoursActions.CreateLessonPlanSuccess(payload)),
          tap(() => {
            this.router.navigate(['/configuration/lesson-plans/list'])
          })
        ),
    onError: (action: fromLessonHoursActions.CreateLessonPlan, payload: CreateLessonPlanFailPayload) =>
      new fromLessonHoursActions.CreateLessonPlanFail(payload)
  });

  @Effect()
  deleteLessonHour$ = this.dp.pessimisticUpdate(fromLessonHoursActions.Types.DeleteLessonPlan, {
    run: (action: fromLessonHoursActions.DeleteLessonPlan) =>
      this.lessonPlansApiService.deleteLessonPlan(action.payload)
        .pipe(
          map((payload: DeleteLessonPlanSuccessPayload) => new fromLessonHoursActions.DeleteLessonPlanSuccess(payload)),
        ),
    onError: (action: fromLessonHoursActions.DeleteLessonPlan, payload: DeleteLessonPlanFailPayload) =>
      new fromLessonHoursActions.DeleteLessonPlanFail(payload)
  });

  @Effect()
  getLessonHours$ = this.dp.fetch(fromLessonHoursActions.Types.GetLessonPlans, {
    run: (action: fromLessonHoursActions.GetLessonPlans) =>
      this.lessonPlansApiService.getLessonPlans(action.payload)
        .pipe(
          map((payload: GetLessonPlansSuccessPayload) => new fromLessonHoursActions.GetLessonPlansSuccess(payload))
        ),
    onError: (action: fromLessonHoursActions.GetLessonPlans, payload: GetLessonPlansFailPayload) =>
      new fromLessonHoursActions.GetLessonPlansFail(payload)
  });

  @Effect()
  updateLessonHour$ = this.dp.pessimisticUpdate(fromLessonHoursActions.Types.UpdateLessonPlan, {
    run: (action: fromLessonHoursActions.UpdateLessonPlan) =>
      this.lessonPlansApiService.updateLessonPlan(action.payload)
        .pipe(
          map((payload: UpdateLessonPlanSuccessPayload) => new fromLessonHoursActions.UpdateLessonPlanSuccess(payload)),
          tap(() => {
            this.router.navigate(['/configuration/lesson-plans/list'])
          })
        ),
    onError: (action: fromLessonHoursActions.UpdateLessonPlan, payload: UpdateLessonPlanFailPayload) =>
      new fromLessonHoursActions.UpdateLessonPlanFail(payload)
  });

  constructor(
    private actions$: Actions,
    private dp: DataPersistence<LessonHoursPartialState>,
    private lessonPlansApiService: LessonPlansApiService,
    private router: Router
  ) {}
}
