import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromAssignments from './assignments.reducer';
import { assignmentsQuery } from './assignments.selectors';
import { CreateAssignmentRequestPayload } from '../request-payloads/create-assignment.request-payload';
import { DeleteAssignmentRequestPayload } from '../request-payloads/delete-assignment.request-payload';
import { fromAssignmentsActions } from './assignments.actions';
import { GetAssignmentsRequestPayload } from '../request-payloads/get-assignments.request-payload';
import { SelectAssignmentPayload } from '../payloads/select-assignment.payload';
import { UpdateAssignmentRequestPayload } from '../request-payloads/update-assignment.request-payload';

@Injectable()
export class AssignmentsFacade {
  assignments$ = this.store.pipe(select(assignmentsQuery.getAssignments));
  selectedAssignment$ = this.store.pipe(select(assignmentsQuery.getSelectedAssignment));

  constructor(private store: Store<fromAssignments.AssignmentsPartialState>) {}

  createAssignment(createAssignmentRequestPayload: CreateAssignmentRequestPayload): void {
    this.store.dispatch(new fromAssignmentsActions.CreateAssignment(createAssignmentRequestPayload));
  }

  deleteAssignment(deleteAssignmentRequestPayload: DeleteAssignmentRequestPayload): void {
    this.store.dispatch(new fromAssignmentsActions.DeleteAssignment(deleteAssignmentRequestPayload));
  }

  getAssignments(getAssignmentsRequestPayload: GetAssignmentsRequestPayload = { page: 1, limit: 10 }): void {
    this.store.dispatch(new fromAssignmentsActions.GetAssignments(getAssignmentsRequestPayload));
  }

  selectAssignment(selectAssignmentPayload: SelectAssignmentPayload): void {
    this.store.dispatch(new fromAssignmentsActions.SelectAssignment(selectAssignmentPayload));
  }

  unselectAssignment(): void {
    this.store.dispatch(new fromAssignmentsActions.UnselectAssignment());
  }

  updateAssignment(updateAssignmentRequestPayload: UpdateAssignmentRequestPayload): void {
    this.store.dispatch(new fromAssignmentsActions.UpdateAssignment(updateAssignmentRequestPayload));
  }
}
