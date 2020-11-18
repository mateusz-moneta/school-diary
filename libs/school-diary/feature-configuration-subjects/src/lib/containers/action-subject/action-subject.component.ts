import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { LanguageService } from '@school-diary/school-diary/shared';
import { Action, Subject as SelectedSubject } from '@school-diary/school-diary/domain';
import { SubjectsFacade } from '@school-diary/school-diary/data-access-configuration-subjects';

@Component({
  selector: 'school-diary-action-subject',
  templateUrl: './action-subject.component.html'
})
export class ActionSubjectComponent implements OnInit, OnDestroy {
  action = Action.CREATE;
  selectedSubject: SelectedSubject;
  subjectForm: FormGroup;
  titleTranslationKey = 'CONFIGURATION-SUBJECTS.CREATOR-TITLE';

  private unsubscribe$ = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private languageService: LanguageService,
    private subjectsFacade: SubjectsFacade
  ) {}

  ngOnInit(): void {
    this.initSubjectForm();
    this.initSelectedSubject();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();

    if (this.selectedSubject) {
      this.subjectsFacade.unselectSubject();
    }
  }

  executeAction(): void {
    const baseRequestPayload = {
      name: this.subjectForm.get('name').value,
      short_name: this.subjectForm.get('shortName').value
    };

    if (this.action === Action.CREATE) {
      this.subjectsFacade.createSubject(baseRequestPayload);
      return;
    }

    this.subjectsFacade.updateSubject({
      id: this.selectedSubject.id,
      ...baseRequestPayload
    });
  }

  private initSubjectForm(): void {
    this.subjectForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      shortName: ['', [Validators.required, Validators.maxLength(3)]]
    });
  }

  private initSelectedSubject(): void {
    this.subjectsFacade.selectedSubject$
      .pipe(
        filter(selectedSubject => !!selectedSubject),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((selectedSubject: SelectedSubject) => {
        this.action = Action.EDIT;
        this.selectedSubject = selectedSubject;
        this.titleTranslationKey = 'CONFIGURATION-SUBJECTS.EDITOR-TITLE';

        this.subjectForm.patchValue({
          name: selectedSubject.name,
          shortName: selectedSubject.short_name
        });
      });
  }
}
