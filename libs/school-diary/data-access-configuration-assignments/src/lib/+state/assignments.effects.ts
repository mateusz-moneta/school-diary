import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';

import { AssignmentsApiService } from '../services/assignments-api.service';
import { AssignmentsPartialState } from './assignments.reducer';
import { CreateAssignmentFailPayload } from '../payloads/create-assignment-fail.payload';
import { CreateAssignmentSuccessPayload } from '../payloads/create-assignment-success.payload';
import { DeleteAssignmentFailPayload } from '../payloads/delete-assignment-fail.payload';
import { DeleteAssignmentSuccessPayload } from '../payloads/delete-assignment-success.payload';
import { fromAssignmentsActions } from './assignments.actions';
import { GetAssignmentFailPayload } from '../payloads/get-assignment-fail.payload';
import { GetAssignmentSuccessPayload } from '../payloads/get-assignment-success.payload';
import { GetAssignmentsFailPayload } from '../payloads/get-assignments-fail.payload';
import { GetAssignmentsSuccessPayload } from '../payloads/get-assignments-success.payload';
import { UpdateAssignmentFailPayload } from '../payloads/update-assignment-fail.payload';
import { UpdateAssignmentSuccessPayload } from '../payloads/update-assignment-success.payload';

@Injectable()
export class AssignmentsEffects {

  @Effect()
  createAssignment$ = this.dp.pessimisticUpdate(fromAssignmentsActions.Types.CreateAssignment, {
    run: (action: fromAssignmentsActions.CreateAssignment) =>
      this.assignmentsApiService.createAssignment(action.payload)
        .pipe(
          map((payload: CreateAssignmentSuccessPayload) => new fromAssignmentsActions.CreateAssignmentSuccess(payload)),
          tap(() => {
            this.router.navigate(['/configuration/assignments/list'])
          })
        ),
    onError: (action: fromAssignmentsActions.CreateAssignment, payload: CreateAssignmentFailPayload) =>
      new fromAssignmentsActions.CreateAssignmentFail(payload)
  });

  @Effect()
  deleteAssignment$ = this.dp.pessimisticUpdate(fromAssignmentsActions.Types.DeleteAssignment, {
    run: (action: fromAssignmentsActions.DeleteAssignment) =>
      this.assignmentsApiService.deleteAssignment(action.payload)
        .pipe(
          map((payload: DeleteAssignmentSuccessPayload) => new fromAssignmentsActions.DeleteAssignmentSuccess(payload)),
        ),
    onError: (action: fromAssignmentsActions.DeleteAssignment, payload: DeleteAssignmentFailPayload) =>
      new fromAssignmentsActions.DeleteAssignmentFail(payload)
  });

  @Effect()
  getAssignment$ = this.dp.fetch(fromAssignmentsActions.Types.GetAssignment, {
    run: (action: fromAssignmentsActions.GetAssignment) =>
      this.assignmentsApiService.getAssignment(action.payload)
        .pipe(
          map((payload: GetAssignmentSuccessPayload) => new fromAssignmentsActions.GetAssignmentSuccess(payload))
        ),
    onError: (action: fromAssignmentsActions.GetAssignment, payload: GetAssignmentFailPayload) =>
      new fromAssignmentsActions.GetAssignmentFail(payload)
  });

  @Effect()
  getAssignments$ = this.dp.fetch(fromAssignmentsActions.Types.GetAssignments, {
    run: (action: fromAssignmentsActions.GetAssignments) =>
      this.assignmentsApiService.getAssignments(action.payload)
        .pipe(
          map((payload: GetAssignmentsSuccessPayload) => new fromAssignmentsActions.GetAssignmentsSuccess(payload))
        ),
    onError: (action: fromAssignmentsActions.GetAssignments, payload: GetAssignmentsFailPayload) =>
      new fromAssignmentsActions.GetAssignmentsFail(payload)
  });

  @Effect()
  updateAssignment$ = this.dp.pessimisticUpdate(fromAssignmentsActions.Types.UpdateAssignment, {
    run: (action: fromAssignmentsActions.UpdateAssignment) =>
      this.assignmentsApiService.updateAssignment(action.payload)
        .pipe(
          map((payload: UpdateAssignmentSuccessPayload) => new fromAssignmentsActions.UpdateAssignmentSuccess(payload)),
          tap(() => {
            this.router.navigate(['/configuration/assignments/list'])
          })
        ),
    onError: (action: fromAssignmentsActions.UpdateAssignment, payload: UpdateAssignmentFailPayload) =>
      new fromAssignmentsActions.UpdateAssignmentFail(payload)
  });

  constructor(
    private actions$: Actions,
    private dp: DataPersistence<AssignmentsPartialState>,
    private assignmentsApiService: AssignmentsApiService,
    private router: Router
  ) {}
}
