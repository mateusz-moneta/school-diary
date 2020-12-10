import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { LessonHoursFacade } from '@school-diary/school-diary/data-access-configuration-lesson-hours';

@Injectable()
export class LessonHourExistGuard implements CanActivate {

  constructor(private lessonHoursFacade: LessonHoursFacade) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.lessonHoursFacade.getLessonHour({ id: +next.paramMap.get('id') });
    return true;
  }
}
