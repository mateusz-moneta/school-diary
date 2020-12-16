import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { LessonPlansFacade } from '@school-diary/school-diary/data-access-configuration-lesson-plans';
import { ClassUnitsFacade } from '@school-diary/school-diary/data-access-configuration-class-units';
import { ClassRoomsFacade } from '@school-diary/school-diary/data-access-configuration-class-rooms';
import { LessonHoursFacade } from '@school-diary/school-diary/data-access-configuration-lesson-hours';
import { SubjectsFacade } from '@school-diary/school-diary/data-access-configuration-subjects';
import { TranslationsFacade } from '@school-diary/school-diary/data-access-translations';
import { TranslationsScope } from '@school-diary/school-diary/domain';
import { UsersFacade } from '@school-diary/school-diary/data-access-users';

@Injectable()
export class LessonPlansGuard implements CanActivate {

  constructor(
    private classRoomsFacade: ClassRoomsFacade,
    private classUnitsFacade: ClassUnitsFacade,
    private lessonHoursFacade: LessonHoursFacade,
    private lessonPlansFacade: LessonPlansFacade,
    private subjectsFacade: SubjectsFacade,
    private translationsFacade: TranslationsFacade,
    private usersFacade: UsersFacade
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.classRoomsFacade.getClassRooms();
    this.classUnitsFacade.getClassUnits();
    this.lessonHoursFacade.getLessonHours();
    this.lessonPlansFacade.getLessonPlans();
    this.subjectsFacade.getSubjects();
    this.translationsFacade.getTranslationsGroup({ translationsScope: TranslationsScope.CONFIGURATION_LESSON_PLANS });
    this.usersFacade.getTeachers();
    return true;
  }
}
