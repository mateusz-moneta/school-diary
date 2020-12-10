import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import { CreateLessonPlanFailPayload } from '../payloads/create-lesson-plan-fail.payload';
import { CreateLessonPlanSuccessPayload } from '../payloads/create-lesson-plan-success.payload';
import { DeleteLessonPlanFailPayload } from '../payloads/delete-lesson-plan-fail.payload';
import { DeleteLessonPlanSuccessPayload } from '../payloads/delete-lesson-plan-success.payload';
import { fromLessonPlansActions } from './lesson-plans.actions';
import { GetLessonPlanFailPayload } from '../payloads/get-lesson-plan-fail.payload';
import { GetLessonPlanSuccessPayload } from '../payloads/get-lesson-plan-success.payload';
import { GetLessonPlansFailPayload } from '../payloads/get-lesson-plans-fail.payload';
import { GetLessonPlansSuccessPayload } from '../payloads/get-lesson-plans-success.payload';
import { LessonPlansApiService } from '../services/lesson-plans-api.service';
import { LessonPlansPartialState } from './lesson-plans.reducer';
import { UpdateLessonPlanFailPayload } from '../payloads/update-lesson-plan-fail.payload';
import { UpdateLessonPlanSuccessPayload } from '../payloads/update-lesson-plan-success.payload';

@Injectable()
export class LessonPlansEffects {

  @Effect()
  createLessonPlan$ = this.dp.pessimisticUpdate(fromLessonPlansActions.Types.CreateLessonPlan, {
    run: (action: fromLessonPlansActions.CreateLessonPlan) =>
      this.lessonPlansApiService.createLessonPlan(action.payload)
        .pipe(
          map((payload: CreateLessonPlanSuccessPayload) => new fromLessonPlansActions.CreateLessonPlanSuccess(payload)),
          tap(() => {
            this.router.navigate(['/configuration/lesson-plans/list'])
          })
        ),
    onError: (action: fromLessonPlansActions.CreateLessonPlan, payload: CreateLessonPlanFailPayload) =>
      new fromLessonPlansActions.CreateLessonPlanFail(payload)
  });

  @Effect()
  deleteLessonPlan$ = this.dp.pessimisticUpdate(fromLessonPlansActions.Types.DeleteLessonPlan, {
    run: (action: fromLessonPlansActions.DeleteLessonPlan) =>
      this.lessonPlansApiService.deleteLessonPlan(action.payload)
        .pipe(
          map((payload: DeleteLessonPlanSuccessPayload) => new fromLessonPlansActions.DeleteLessonPlanSuccess(payload)),
        ),
    onError: (action: fromLessonPlansActions.DeleteLessonPlan, payload: DeleteLessonPlanFailPayload) =>
      new fromLessonPlansActions.DeleteLessonPlanFail(payload)
  });

  @Effect()
  getLessonPlan$ = this.dp.fetch(fromLessonPlansActions.Types.GetLessonPlan, {
    run: (action: fromLessonPlansActions.GetLessonPlan) =>
      this.lessonPlansApiService.getLessonPlan(action.payload)
        .pipe(
          map((payload: GetLessonPlanSuccessPayload) => new fromLessonPlansActions.GetLessonPlanSuccess(payload))
        ),
    onError: (action: fromLessonPlansActions.GetLessonPlan, payload: GetLessonPlanFailPayload) =>
      new fromLessonPlansActions.GetLessonPlanFail(payload)
  });

  @Effect()
  getLessonPlans$ = this.dp.fetch(fromLessonPlansActions.Types.GetLessonPlans, {
    run: (action: fromLessonPlansActions.GetLessonPlans) =>
      this.lessonPlansApiService.getLessonPlans(action.payload)
        .pipe(
          map((payload: GetLessonPlansSuccessPayload) => new fromLessonPlansActions.GetLessonPlansSuccess(payload))
        ),
    onError: (action: fromLessonPlansActions.GetLessonPlans, payload: GetLessonPlansFailPayload) =>
      new fromLessonPlansActions.GetLessonPlansFail(payload)
  });

  @Effect()
  updateLessonPlan$ = this.dp.pessimisticUpdate(fromLessonPlansActions.Types.UpdateLessonPlan, {
    run: (action: fromLessonPlansActions.UpdateLessonPlan) =>
      this.lessonPlansApiService.updateLessonPlan(action.payload)
        .pipe(
          map((payload: UpdateLessonPlanSuccessPayload) => new fromLessonPlansActions.UpdateLessonPlanSuccess(payload)),
          tap(() => {
            this.router.navigate(['/configuration/lesson-plans/list'])
          })
        ),
    onError: (action: fromLessonPlansActions.UpdateLessonPlan, payload: UpdateLessonPlanFailPayload) =>
      new fromLessonPlansActions.UpdateLessonPlanFail(payload)
  });

  constructor(
    private actions$: Actions,
    private dp: DataPersistence<LessonPlansPartialState>,
    private lessonPlansApiService: LessonPlansApiService,
    private router: Router
  ) {}
}
