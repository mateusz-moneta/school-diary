import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromLessonHours from './lesson-hours.reducer';
import { lessonHoursQuery } from './lesson-hours.selectors';
import { CreateLessonHourRequestPayload } from '../request-payloads/create-lesson-hour.request-payload';
import { DeleteLessonHourRequestPayload } from '../request-payloads/delete-lesson-hour.request-payload';
import { fromLessonHoursActions } from './lesson-hours.actions';
import { GetLessonHourRequestPayload } from '../request-payloads/get-lesson-hour.request-payload';
import { GetLessonHoursRequestPayload } from '../request-payloads/get-lesson-hours.request-payload';
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

  getLessonHour(getLessonHourRequestPayload: GetLessonHourRequestPayload): void {
    this.store.dispatch(new fromLessonHoursActions.GetLessonHour(getLessonHourRequestPayload));
  }

  getLessonHours(getLessonHoursRequestPayload: GetLessonHoursRequestPayload = { page: 1, limit: 10 }): void {
    this.store.dispatch(new fromLessonHoursActions.GetLessonHours(getLessonHoursRequestPayload));
  }

  updateLessonHour(updateLessonHourRequestPayload: UpdateLessonHourRequestPayload): void {
    this.store.dispatch(new fromLessonHoursActions.UpdateLessonHour(updateLessonHourRequestPayload));
  }
}
