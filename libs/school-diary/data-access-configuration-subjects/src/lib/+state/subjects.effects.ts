import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import { fromSubjectsActions } from './subjects.actions';
import { GetSubjectsFailPayload } from '../payloads/get-subjects-fail.payload';
import { GetSubjectsSuccessPayload } from '../payloads/get-subjects-success.payload';
import { SubjectsApiService } from '../services/subjects-api.service';
import { SubjectsPartialState } from './subjects.reducer';
import { CreateSubjectSuccessPayload } from '../payloads/create-subject-success.payload';
import { CreateSubjectFailPayload } from '../payloads/create-subject-fail.payload';

@Injectable()
export class SubjectsEffects {

  @Effect()
  getSubjects$ = this.dp.fetch(fromSubjectsActions.Types.GetSubjects, {
    run: () =>
      this.subjectsApiService.getSubjects()
        .pipe(
          map((payload: GetSubjectsSuccessPayload[]) => new fromSubjectsActions.GetSubjectsSuccess(payload))
        ),
    onError: (action: fromSubjectsActions.GetSubjectsFail, payload: GetSubjectsFailPayload) =>
      new fromSubjectsActions.GetSubjectsFail(payload)
  });

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

  constructor(
    private actions$: Actions,
    private dp: DataPersistence<SubjectsPartialState>,
    private subjectsApiService: SubjectsApiService,
    private router: Router
  ) {}
}
