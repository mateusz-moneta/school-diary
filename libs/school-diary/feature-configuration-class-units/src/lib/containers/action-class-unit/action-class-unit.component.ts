import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

import { Action, ClassUnit, InputType, SelectOption, User } from '@school-diary/school-diary/domain';
import { ClassUnitsFacade } from '@school-diary/school-diary/data-access-configuration-class-units';
import { LanguageService } from '@school-diary/school-diary/shared';
import { UsersFacade } from '@school-diary/school-diary/data-access-users';
import { getSelectOptions } from '@school-diary/school-diary/util-select-options';

@Component({
  selector: 'school-diary-action-class-unit',
  templateUrl: './action-class-unit.component.html'
})
export class ActionClassUnitComponent implements OnInit, OnDestroy {
  action = Action.CREATE;
  classTeachersOptions: SelectOption[] = [];
  classUnitForm: FormGroup;
  selectedClassUnit: ClassUnit;
  titleTranslationKey = 'CONFIGURATION-CLASS-UNITS.CREATOR-TITLE';

  private unsubscribe$ = new Subject<void>();

  readonly inputType = InputType;

  constructor(
    private classUnitsFacade: ClassUnitsFacade,
    private formBuilder: FormBuilder,
    private languageService: LanguageService,
    private usersFacade: UsersFacade
  ) {}

  ngOnInit(): void {
    this.initClassTeachersOptions();
    this.initClassUnitForm();
    this.initSelectedClassUnit();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();

    if (this.selectedClassUnit) {
      this.classUnitsFacade.unselectClassUnit();
    }
  }

  executeAction(): void {
    const baseRequestPayload = {
      name: this.classUnitForm.get('name').value,
      teacher_id: this.classUnitForm.get('teacherId').value,
    };

    if (this.action === Action.CREATE) {
      this.classUnitsFacade.createClassUnit(baseRequestPayload);
      return;
    }

    this.classUnitsFacade.updateClassUnit({
      id: this.selectedClassUnit.id,
      ...baseRequestPayload
    });
  }

  private initClassUnitForm(): void {
    this.classUnitForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      teacherId: ['', [Validators.required]],
    });
  }

  private initClassTeachersOptions(): void {
    this.usersFacade.teachers$
      .pipe(
        filter(teachers => !!teachers),
        map(teachersCollection => teachersCollection.data),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((teachers: User[]) => {
        this.classTeachersOptions = getSelectOptions<User, keyof User>(teachers, ['first_name', 'last_name'], 'id');
      })
  }

  private initSelectedClassUnit(): void {
    this.classUnitsFacade.selectedClassUnit$
      .pipe(
        filter(selectedClassUnit => !!selectedClassUnit),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((selectedClassUnit: ClassUnit) => {
        this.action = Action.EDIT;
        this.selectedClassUnit = selectedClassUnit;
        this.classUnitForm.controls.name.setValue(this.selectedClassUnit.name);
        this.classUnitForm.controls.teacherId.setValue(this.selectedClassUnit.user_id);
        this.titleTranslationKey = 'CONFIGURATION-CLASS-UNITS.EDITOR-TITLE';
      });
  }
}
