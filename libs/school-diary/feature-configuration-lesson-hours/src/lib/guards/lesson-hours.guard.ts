import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { LessonHoursFacade } from '@school-diary/school-diary/data-access-configuration-lesson-hours';
import { TranslationsFacade } from '@school-diary/school-diary/data-access-translations';
import { TranslationsScope } from '@school-diary/school-diary/domain';

@Injectable()
export class LessonHoursGuard implements CanActivate {

  constructor(private lessonHoursFacade: LessonHoursFacade, private translationsFacade: TranslationsFacade) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.lessonHoursFacade.getLessonHours();
    this.translationsFacade.getTranslationsGroup({ translationsScope: TranslationsScope.CONFIGURATION_LESSON_HOURS });
    return true;
  }
}
