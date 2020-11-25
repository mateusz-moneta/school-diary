import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromLessonPlans from './lesson-plans.reducer';
import { lessonPlansQuery } from './lesson-plans.selectors';
import { CreateLessonPlanRequestPayload } from '../request-payloads/create-lesson-plan.request-payload';
import { DeleteLessonPlanRequestPayload } from '../request-payloads/delete-lesson-plan.request-payload';
import { fromLessonPlansActions } from './lesson-plans.actions';
import { GetLessonPlansRequestPayload } from '../request-payloads/get-lesson-plans.request-payload';
import { SelectLessonPlanPayload } from '../payloads/select-lesson-plan.payload';
import { UpdateLessonPlanRequestPayload } from '../request-payloads/update-lesson-plan.request-payload';

@Injectable()
export class LessonPlansFacade {
  lessonPlans$ = this.store.pipe(select(lessonPlansQuery.getLessonPlans));
  selectedLessonPlan$ = this.store.pipe(select(lessonPlansQuery.getSelectedLessonPlan));

  constructor(private store: Store<fromLessonPlans.LessonPlansPartialState>) {}

  createLessonPlan(createLessonPlanRequestPayload: CreateLessonPlanRequestPayload): void {
    this.store.dispatch(new fromLessonPlansActions.CreateLessonPlan(createLessonPlanRequestPayload));
  }

  deleteLessonPlan(deleteLessonPlanRequestPayload: DeleteLessonPlanRequestPayload): void {
    this.store.dispatch(new fromLessonPlansActions.DeleteLessonPlan(deleteLessonPlanRequestPayload));
  }

  getLessonPlans(getLessonPlansRequestPayload: GetLessonPlansRequestPayload = { page: 1, limit: 10 }): void {
    this.store.dispatch(new fromLessonPlansActions.GetLessonPlans(getLessonPlansRequestPayload));
  }

  selectLessonPlan(selectLessonPlanPayload: SelectLessonPlanPayload): void {
    this.store.dispatch(new fromLessonPlansActions.SelectLessonPlan(selectLessonPlanPayload));
  }

  unselectLessonPlan(): void {
    this.store.dispatch(new fromLessonPlansActions.UnselectLessonPlan());
  }

  updateLessonPlan(updateLessonPlanRequestPayload: UpdateLessonPlanRequestPayload): void {
    this.store.dispatch(new fromLessonPlansActions.UpdateLessonPlan(updateLessonPlanRequestPayload));
  }
}
