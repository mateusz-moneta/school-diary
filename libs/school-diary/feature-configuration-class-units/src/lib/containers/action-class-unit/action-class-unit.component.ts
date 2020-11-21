import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

import { Action, ClassUnit, SelectOption, User } from '@school-diary/school-diary/domain';
import { ClassUnitsFacade } from '@school-diary/school-diary/data-access-configuration-class-units';
import { LanguageService } from '@school-diary/school-diary/shared';
import { UsersFacade } from '@school-diary/school-diary/data-access-users';

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
        map(teachersCollection => teachersCollection.data),
        filter(teachers => teachers.length > 0),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((teachers: User[]) => {
        this.classTeachersOptions = teachers.map((teacher: User) =>
          ({
            description: `${teacher.first_name} ${teacher.last_name}`,
            value: teacher.id
          })
        );
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
        this.titleTranslationKey = 'CONFIGURATION-CLASS-UNITS.EDITOR-TITLE';

        this.classUnitForm.patchValue(selectedClassUnit);
      });
  }
}
