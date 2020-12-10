import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import {
  Action,
  ClassUnit,
  InputType,
  SelectedAssignment,
  SelectOption,
  User
} from '@school-diary/school-diary/domain';
import { AssignmentsFacade } from '@school-diary/school-diary/data-access-configuration-assignments';
import { ClassUnitsFacade } from '@school-diary/school-diary/data-access-configuration-class-units';
import { getSelectOptions } from '@school-diary/school-diary/util-select-options';
import { LanguageService } from '@school-diary/school-diary/shared';
import { UsersFacade } from '@school-diary/school-diary/data-access-users';

@Component({
  selector: 'school-diary-action-assignment',
  templateUrl: './action-assignment.component.html'
})
export class ActionAssignmentComponent implements OnInit, OnDestroy {
  action = Action.CREATE;
  assignmentForm: FormGroup;
  classUnitsOptions: SelectOption[] = [];
  selectedAssignment: SelectedAssignment;
  studentsOptions: SelectOption[] = [];
  titleTranslationKey = 'CONFIGURATION-ASSIGNMENTS.CREATOR-TITLE';

  private unsubscribe$ = new Subject<void>();

  readonly inputType = InputType;

  constructor(
    private activatedRoute: ActivatedRoute,
    private assignmentsFacade: AssignmentsFacade,
    private classUnitsFacade: ClassUnitsFacade,
    private formBuilder: FormBuilder,
    private languageService: LanguageService,
    private usersFacade: UsersFacade
  ) {}

  ngOnInit(): void {
    this.usersFacade.getStudents();

    this.initAssignmentsForm();
    this.initSelectedAssignment();
    this.initSelectOptions();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
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

  private initAssignmentsForm(): void {
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
      .subscribe((selectedAssignment: SelectedAssignment) => {
        this.action = Action.EDIT;
        this.selectedAssignment = selectedAssignment;
        this.titleTranslationKey = 'CONFIGURATION-ASSIGNMENTS.EDITOR-TITLE';
        this.assignmentForm.controls.classUnitId.setValue(selectedAssignment.class_unit_id);
        this.assignmentForm.controls.studentId.setValue(selectedAssignment.user_id);
      });
  }

  private initSelectOptions(): void {
    combineLatest([
      this.classUnitsFacade.classUnits$,
      this.usersFacade.students$
    ])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(([classUnits, students]) => {
        this.classUnitsOptions = getSelectOptions<ClassUnit, keyof ClassUnit>(classUnits?.data, ['name'], 'id');
        this.studentsOptions = getSelectOptions<User, keyof User>(students?.data, ['first_name', 'last_name'], 'id');
      })
  }
}
