import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromLessonHours from './lesson-hours.reducer';
import { lessonHoursQuery } from './lesson-hours.selectors';
import { CreateLessonHourRequestPayload } from '../request-payloads/create-lesson-hour.request-payload';
import { DeleteLessonHourRequestPayload } from '../request-payloads/delete-lesson-hour.request-payload';
import { fromLessonHoursActions } from './lesson-hours.actions';
import { GetLessonHoursRequestPayload } from '../request-payloads/get-lesson-hours.request-payload';
import { SelectLessonHourPayload } from '../payloads/select-lesson-hour.payload';
import { UpdateLessonHourRequestPayload } from '../request-payloads/update-lesson-hour.request-payload';

@Injectable()
export class LessonHoursFacade {
  lessonHours$ = this.store.pipe(select(lessonHoursQuery.getLessonHours));
  selectedLessonHour$ = this.store.pipe(select(lessonHoursQuery.getSelectedLessonHour));

  constructor(private store: Store<fromLessonHours.LessonHoursPartialState>) {}

  createLessonHour(createLessonHourRequestPayload: CreateLessonHourRequestPayload): void {
    this.store.dispatch(new fromLessonHoursActions.CreateLessonHour(createLessonHourRequestPayload));
  }

  deleteLessonHour(deleteLessonHourRequestPayload: DeleteLessonHourRequestPayload): void {
    this.store.dispatch(new fromLessonHoursActions.DeleteLessonHour(deleteLessonHourRequestPayload));
  }

  getLessonHours(getLessonHoursRequestPayload: GetLessonHoursRequestPayload = { page: 1, limit: 10 }): void {
    this.store.dispatch(new fromLessonHoursActions.GetLessonHours(getLessonHoursRequestPayload));
  }

  selectLessonHour(selectLessonHourPayload: SelectLessonHourPayload): void {
    this.store.dispatch(new fromLessonHoursActions.SelectLessonHour(selectLessonHourPayload));
  }

  unselectLessonHour(): void {
    this.store.dispatch(new fromLessonHoursActions.UnselectLessonHour());
  }

  updateLessonHour(updateLessonHourRequestPayload: UpdateLessonHourRequestPayload): void {
    this.store.dispatch(new fromLessonHoursActions.UpdateLessonHour(updateLessonHourRequestPayload));
  }
}
