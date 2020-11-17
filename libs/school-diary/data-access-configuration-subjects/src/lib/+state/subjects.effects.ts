import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import { CreateSubjectFailPayload } from '../payloads/create-subject-fail.payload';
import { CreateSubjectSuccessPayload } from '../payloads/create-subject-success.payload';
import { DeleteSubjectFailPayload } from '../payloads/delete-subject-fail.payload';
import { DeleteSubjectSuccessPayload } from '../payloads/delete-subject-success.payload';
import { fromSubjectsActions } from './subjects.actions';
import { GetSubjectsFailPayload } from '../payloads/get-subjects-fail.payload';
import { GetSubjectsSuccessPayload } from '../payloads/get-subjects-success.payload';
import { SubjectsApiService } from '../services/subjects-api.service';
import { SubjectsPartialState } from './subjects.reducer';
import { UpdateSubjectFailPayload } from '../payloads/update-subject-fail.payload';
import { UpdateSubjectSuccessPayload } from '../payloads/update-subject-success.payload';

@Injectable()
export class SubjectsEffects {

  @Effect()
  createSubject$ = this.dp.pessimisticUpdate(fromSubjectsActions.Types.CreateSubject, {
    run: (action: fromSubjectsActions.CreateSubject) =>
      this.subjectsApiService.createSubject(action.payload)
        .pipe(
          map((payload: CreateSubjectSuccessPayload) => new fromSubjectsActions.CreateSubjectSuccess(payload)),
          tap(() => {
            this.router.navigate(['/configuration/subjects/list'])
          })
        ),
    onError: (action: fromSubjectsActions.CreateSubject, payload: CreateSubjectFailPayload) =>
      new fromSubjectsActions.CreateSubjectFail(payload)
  });

  @Effect()
  deleteSubject$ = this.dp.pessimisticUpdate(fromSubjectsActions.Types.DeleteSubject, {
    run: (action: fromSubjectsActions.DeleteSubject) =>
      this.subjectsApiService.deleteSubject(action.payload)
        .pipe(
          map((payload: DeleteSubjectSuccessPayload) => new fromSubjectsActions.DeleteSubjectSuccess(payload)),
        ),
    onError: (action: fromSubjectsActions.DeleteSubject, payload: DeleteSubjectFailPayload) =>
      new fromSubjectsActions.DeleteSubjectFail(payload)
  });

  @Effect()
  getSubjects$ = this.dp.fetch(fromSubjectsActions.Types.GetSubjects, {
    run: (action: fromSubjectsActions.GetSubjects) =>
      this.subjectsApiService.getSubjects(action.payload)
        .pipe(
          map((payload: GetSubjectsSuccessPayload) => new fromSubjectsActions.GetSubjectsSuccess(payload))
        ),
    onError: (action: fromSubjectsActions.GetSubjects, payload: GetSubjectsFailPayload) =>
      new fromSubjectsActions.GetSubjectsFail(payload)
  });

  @Effect()
  updateSubject$ = this.dp.pessimisticUpdate(fromSubjectsActions.Types.UpdateSubject, {
    run: (action: fromSubjectsActions.UpdateSubject) =>
      this.subjectsApiService.updateSubject(action.payload)
        .pipe(
          map((payload: UpdateSubjectSuccessPayload) => new fromSubjectsActions.UpdateSubjectSuccess(payload)),
          tap(() => {
            this.router.navigate(['/configuration/subjects/list'])
          })
        ),
    onError: (action: fromSubjectsActions.UpdateSubject, payload: UpdateSubjectFailPayload) =>
      new fromSubjectsActions.UpdateSubjectFail(payload)
  });

  constructor(
    private actions$: Actions,
    private dp: DataPersistence<SubjectsPartialState>,
    private subjectsApiService: SubjectsApiService,
    private router: Router
  ) {}
}
