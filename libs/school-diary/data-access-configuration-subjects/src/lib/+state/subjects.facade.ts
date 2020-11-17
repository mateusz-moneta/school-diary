import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromSubjects from './subjects.reducer';
import { CreateSubjectRequestPayload } from '../request-payloads/create-subject.request-payload';
import { DeleteSubjectRequestPayload } from '../request-payloads/delete-subject.request-payload';
import { fromSubjectsActions } from './subjects.actions';
import { GetSubjectsRequestPayload } from '../request-payloads/get-subjects.request-payload';
import { SelectSubjectPayload } from '../payloads/select-subject.payload';
import { subjectsQuery } from './subjects.selectors';
import { UpdateSubjectRequestPayload } from '../request-payloads/update-subject.request-payload';

@Injectable()
export class SubjectsFacade {
  subjects$ = this.store.pipe(select(subjectsQuery.getSubjects));
  selectedSubject$ = this.store.pipe(select(subjectsQuery.getSelectedSubject));

  constructor(private store: Store<fromSubjects.SubjectsPartialState>) {}

  createSubject(createSubjectRequestPayload: CreateSubjectRequestPayload): void {
    this.store.dispatch(new fromSubjectsActions.CreateSubject(createSubjectRequestPayload));
  }

  deleteSubject(deleteSubjectRequestPayload: DeleteSubjectRequestPayload): void {
    this.store.dispatch(new fromSubjectsActions.DeleteSubject(deleteSubjectRequestPayload));
  }

  getSubjects(getSubjectsRequestPayload: GetSubjectsRequestPayload = { page: 1, limit: 10 }): void {
    this.store.dispatch(new fromSubjectsActions.GetSubjects(getSubjectsRequestPayload));
  }

  selectSubject(selectSubjectPayload: SelectSubjectPayload): void {
    this.store.dispatch(new fromSubjectsActions.SelectSubject(selectSubjectPayload));
  }

  unselectSubject(): void {
    this.store.dispatch(new fromSubjectsActions.UnselectSubject());
  }

  updateSubject(updateSubjectRequestPayload: UpdateSubjectRequestPayload): void {
    this.store.dispatch(new fromSubjectsActions.UpdateSubject(updateSubjectRequestPayload));
  }
}
