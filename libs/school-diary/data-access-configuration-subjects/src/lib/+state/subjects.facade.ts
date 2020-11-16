import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromSubjects from './subjects.reducer';
import { CreateSubjectRequestPayload } from '../request-payloads/create-subject.request-payload';
import { fromSubjectsActions } from './subjects.actions';
import { subjectsQuery } from './subjects.selectors';

@Injectable()
export class SubjectsFacade {
  subjects$ = this.store.pipe(select(subjectsQuery.getSubjects));

  constructor(private store: Store<fromSubjects.SubjectsPartialState>) {}

  createSubject(createSubjectRequestPayload: CreateSubjectRequestPayload): void {
    this.store.dispatch(new fromSubjectsActions.CreateSubject(createSubjectRequestPayload));
  }

  getSubjects(): void {
    this.store.dispatch(new fromSubjectsActions.GetSubjects());
  }
}
