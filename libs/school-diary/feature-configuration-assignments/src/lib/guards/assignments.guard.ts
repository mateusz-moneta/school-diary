import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AssignmentsFacade } from '@school-diary/school-diary/data-access-configuration-assignments';
import { ClassUnitsFacade } from '@school-diary/school-diary/data-access-configuration-class-units';
import { TranslationsFacade } from '@school-diary/school-diary/data-access-translations';
import { TranslationsScope } from '@school-diary/school-diary/domain';

@Injectable()
export class AssignmentsGuard implements CanActivate {

  constructor(
    private assignmentsFacade: AssignmentsFacade,
    private classUnitsFacade: ClassUnitsFacade,
    private translationsFacade: TranslationsFacade
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.assignmentsFacade.getAssignments();
    this.classUnitsFacade.getClassUnits();
    this.translationsFacade.getTranslationsGroup({ translationsScope: TranslationsScope.CONFIGURATION_ASSIGNMENTS });
    return true;
  }
}
