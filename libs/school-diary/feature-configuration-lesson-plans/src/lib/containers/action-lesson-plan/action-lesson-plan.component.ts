import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { combineLatest, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import {
  Action,
  ClassRoom,
  ClassUnit,
  InputType,
  LessonHour,
  SelectedLessonPlan,
  SelectOption,
  Subject as SubjectItem,
  User,
  WorkDayName
} from '@school-diary/school-diary/domain';
import { ClassRoomsFacade } from '@school-diary/school-diary/data-access-configuration-class-rooms';
import { ClassUnitsFacade } from '@school-diary/school-diary/data-access-configuration-class-units';
import { getSelectOptions } from '@school-diary/school-diary/util-select-options';
import { LanguageService } from '@school-diary/school-diary/shared';
import { LessonHoursFacade } from '@school-diary/school-diary/data-access-configuration-lesson-hours';
import { LessonPlansFacade } from '@school-diary/school-diary/data-access-configuration-lesson-plans';
import { SubjectsFacade } from '@school-diary/school-diary/data-access-configuration-subjects';
import { UsersFacade } from '@school-diary/school-diary/data-access-users';

@Component({
  selector: 'school-diary-action-lesson-plan',
  templateUrl: './action-lesson-plan.component.html'
})
export class ActionLessonPlanComponent implements OnInit, OnDestroy {
  action = Action.CREATE;
  classRoomsOptions: SelectOption[] = [];
  classUnitsOptions: SelectOption[] = [];
  lessonHoursOptions: SelectOption[] = [];
  lessonPlanForm: FormGroup;
  selectedLessonPlan: SelectedLessonPlan;
  subjectsOptions: SelectOption[] = [];
  teachersOptions: SelectOption[] = [];
  titleTranslationKey = 'CONFIGURATION-LESSON-PLANS.CREATOR-TITLE';
  workDaysOptions: SelectOption[] = [];

  private unsubscribe$ = new Subject<void>();

  readonly inputType = InputType;

  constructor(
    private classRoomsFacade: ClassRoomsFacade,
    private classUnitsFacade: ClassUnitsFacade,
    private formBuilder: FormBuilder,
    private languageService: LanguageService,
    private lessonHoursFacade: LessonHoursFacade,
    private lessonPlansFacade: LessonPlansFacade,
    private subjectsFacade: SubjectsFacade,
    private usersFacade: UsersFacade
  ) {}

  ngOnInit(): void {
    this.initLessonPlanForm();
    this.initSelectedLessonPlan();
    this.initSelectOptions();
    this.initWorkDayOptions();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  executeAction(): void {
    const baseRequestPayload = {
      class_room_id: this.lessonPlanForm.get('classRoomId').value,
      class_unit_id: this.lessonPlanForm.get('classUnitId').value,
      lesson_hour_id: this.lessonPlanForm.get('lessonHourId').value,
      subject_id: this.lessonPlanForm.get('subjectId').value,
      work_day_id: this.lessonPlanForm.get('workDayId').value,
      teacher_id: this.lessonPlanForm.get('teacherId').value
    };

    if (this.action === Action.CREATE) {
      this.lessonPlansFacade.createLessonPlan(baseRequestPayload);
      return;
    }

    this.lessonPlansFacade.updateLessonPlan({
      id: this.selectedLessonPlan.id,
      ...baseRequestPayload
    });
  }

  private initLessonPlanForm(): void {
    this.lessonPlanForm = this.formBuilder.group({
      classRoomId: ['', [Validators.required]],
      classUnitId: ['', [Validators.required]],
      lessonHourId: ['', [Validators.required]],
      subjectId: ['', [Validators.required]],
      workDayId: ['', [Validators.required]],
      teacherId: ['', [Validators.required]]
    });
  }

  private initSelectedLessonPlan(): void {
    this.lessonPlansFacade.selectedLessonPlan$
      .pipe(
        filter(selectedLessonPlan => !!selectedLessonPlan),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((selectedLessonPlan: SelectedLessonPlan) => {
        this.action = Action.EDIT;
        this.selectedLessonPlan = selectedLessonPlan;
        this.titleTranslationKey = 'CONFIGURATION-LESSON-PLANS.EDITOR-TITLE';

        this.lessonPlanForm.controls.classRoomId.setValue(selectedLessonPlan.class_room_id);
        this.lessonPlanForm.controls.classUnitId.setValue(selectedLessonPlan.class_unit_id);
        this.lessonPlanForm.controls.lessonHourId.setValue(selectedLessonPlan.lesson_hour_id);
        this.lessonPlanForm.controls.subjectId.setValue(selectedLessonPlan.subject_id);
        this.lessonPlanForm.controls.teacherId.setValue(selectedLessonPlan.user_id);
      });
  }

  private initSelectOptions(): void {
    combineLatest([
      this.classRoomsFacade.classRooms$,
      this.classUnitsFacade.classUnits$,
      this.lessonHoursFacade.lessonHours$,
      this.subjectsFacade.subjects$,
      this.usersFacade.teachers$
    ])
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(([classRooms, classUnits, lessonHours, subjects, teachers]) => {
        this.classRoomsOptions = getSelectOptions<ClassRoom, keyof ClassRoom>(classRooms?.data, ['location'], 'id');
        this.classUnitsOptions = getSelectOptions<ClassUnit, keyof ClassUnit>(classUnits?.data, ['name'], 'id');
        this.lessonHoursOptions = getSelectOptions<LessonHour, keyof LessonHour>(lessonHours?.data, ['hour_from'], 'id');
        this.subjectsOptions = getSelectOptions<SubjectItem, keyof SubjectItem>(subjects?.data, ['name'], 'id');
        this.teachersOptions = getSelectOptions<User, keyof User>(teachers?.data, ['first_name', 'last_name'], 'id');
      })
  }

  private initWorkDayOptions(): void {
    this.workDaysOptions = Object.keys(WorkDayName).map((name: WorkDayName, index: number) => ({
      translationKey: `SHARED.${name}`,
      value: index + 1
    }))
  }
}
