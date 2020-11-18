import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { Action, ClassUnit } from '@school-diary/school-diary/domain';
import { ClassUnitsFacade } from '@school-diary/school-diary/data-access-configuration-class-units';
import { LanguageService } from '@school-diary/school-diary/shared';

@Component({
  selector: 'school-diary-action-class-unit',
  templateUrl: './action-class-unit.component.html'
})
export class ActionClassUnitComponent implements OnInit, OnDestroy {
  action = Action.CREATE;
  classTeachersOptions = [];
  classUnitForm: FormGroup;
  selectedClassUnit: ClassUnit;
  titleTranslationKey = 'CONFIGURATION-CLASS-UNITS.CREATOR-TITLE';

  private unsubscribe$ = new Subject<void>();

  constructor(
    private classUnitsFacade: ClassUnitsFacade,
    private formBuilder: FormBuilder,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
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
      user_id: this.classUnitForm.get('userId').value,
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
      userId: ['', [Validators.required]],
    });
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
