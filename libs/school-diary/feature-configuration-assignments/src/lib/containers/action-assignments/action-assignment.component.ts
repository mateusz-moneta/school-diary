import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { Action, Assignment } from '@school-diary/school-diary/domain';
import { AssignmentsFacade } from '@school-diary/school-diary/data-access-configuration-assignments';
import { LanguageService } from '@school-diary/school-diary/shared';

@Component({
  selector: 'school-diary-action-assignment',
  templateUrl: './action-assignment.component.html'
})
export class ActionAssignmentComponent implements OnInit, OnDestroy {
  action = Action.CREATE;
  assignmentForm: FormGroup;
  selectedAssignment: Assignment;
  titleTranslationKey = 'CONFIGURATION-ASSIGNMENTS.CREATOR-TITLE';

  private unsubscribe$ = new Subject<void>();

  constructor(
    private assignmentsFacade: AssignmentsFacade,
    private formBuilder: FormBuilder,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.initClassRoomForm();
    this.initSelectedAssignment();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();

    if (this.selectedAssignment) {
      this.assignmentsFacade.unselectAssignment();
    }
  }

  executeAction(): void {
    const baseRequestPayload = {
      class_unit_id: this.assignmentForm.get('classUnitId').value,
      student_id: this.assignmentForm.get('studentId').value
    };

    if (this.action === Action.CREATE) {
      this.assignmentsFacade.createAssignment(baseRequestPayload);
      return;
    }

    this.assignmentsFacade.updateAssignment({
      id: this.selectedAssignment.id,
      ...baseRequestPayload
    });
  }

  private initClassRoomForm(): void {
    this.assignmentForm = this.formBuilder.group({
      classUnitId: ['', [Validators.required]],
      studentId: ['', [Validators.required]]
    });
  }

  private initSelectedAssignment(): void {
    this.assignmentsFacade.selectedAssignment$
      .pipe(
        filter(selectedAssignment => !!selectedAssignment),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((selectedAssignment: Assignment) => {
        this.action = Action.EDIT;
        this.selectedAssignment = selectedAssignment;
        this.titleTranslationKey = 'CONFIGURATION-ASSIGNMENTS.EDITOR-TITLE';

        this.assignmentForm.patchValue(selectedAssignment);
      });
  }
}
