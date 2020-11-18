import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { Action, LessonHour } from '@school-diary/school-diary/domain';
import { LanguageService } from '@school-diary/school-diary/shared';
import { LessonHoursFacade } from '@school-diary/school-diary/data-access-configuration-lesson-hours';
import { Time } from '../../models/time';

@Component({
  selector: 'school-diary-action-lesson-hour',
  templateUrl: './action-lesson-hour.component.html'
})
export class ActionLessonHourComponent implements OnInit, OnDestroy {
  action = Action.CREATE;
  lessonHourForm: FormGroup;
  selectedLessonHour: LessonHour;
  titleTranslationKey = 'CONFIGURATION-LESSON-HOURS.CREATOR-TITLE';

  private unsubscribe$ = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private languageService: LanguageService,
    private route: ActivatedRoute,
    private lessonHoursFacade: LessonHoursFacade
  ) {}

  ngOnInit(): void {
    this.initLessonHourForm();
    this.initSelectedLessonHour();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();

    if (this.selectedLessonHour) {
      this.lessonHoursFacade.unselectLessonHour();
    }
  }

  executeAction(): void {
    const timeFrom = new Time(this.lessonHourForm.get('timeFrom').value);
    const timeTo = new Time(this.lessonHourForm.get('timeTo').value);

    const baseRequestPayload = {
      hour_from: timeFrom.hour,
      minute_from: timeFrom.minute,
      hour_to: timeTo.hour,
      minute_to: timeTo.minute
    };

    if (this.action === Action.CREATE) {
      this.lessonHoursFacade.createLessonHour(baseRequestPayload);
      return;
    }

    this.lessonHoursFacade.updateLessonHour({
      id: this.selectedLessonHour.id,
      ...baseRequestPayload
    });
  }

  private initLessonHourForm(): void {
    this.lessonHourForm = this.formBuilder.group({
      timeFrom: ['', [Validators.required]],
      timeTo: ['', [Validators.required]]
    });
  }

  private initSelectedLessonHour(): void {
    this.lessonHoursFacade.selectedLessonHour$
      .pipe(
        filter(selectedLessonHour => !!selectedLessonHour),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((selectedLessonHour: LessonHour) => {
        this.action = Action.EDIT;
        this.selectedLessonHour = selectedLessonHour;
        this.titleTranslationKey = 'CONFIGURATION-LESSON-HOURS.EDITOR-TITLE';

        this.lessonHourForm.patchValue({
          timeFrom: `${selectedLessonHour.hour_from}:${selectedLessonHour.minute_from}`,
          timeTo: `${selectedLessonHour.hour_to}:${selectedLessonHour.minute_to}`
        });
      });
  }
}
