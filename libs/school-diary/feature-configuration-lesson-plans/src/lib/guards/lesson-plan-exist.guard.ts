import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { LessonPlansFacade } from '@school-diary/school-diary/data-access-configuration-lesson-plans';

@Injectable()
export class LessonPlanExistGuard implements CanActivate {

  constructor(private lessonPlansFacade: LessonPlansFacade) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.lessonPlansFacade.getLessonPlan({ id: +next.paramMap.get('id') });
    return true;
  }
}
