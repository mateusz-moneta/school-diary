import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ClassUnitsFacade } from '@school-diary/school-diary/data-access-configuration-class-units';
import { UsersFacade } from '@school-diary/school-diary/data-access-users';
import { TranslationsFacade } from '@school-diary/school-diary/data-access-translations';
import { TranslationsScope } from '@school-diary/school-diary/domain';

@Injectable()
export class ClassUnitsGuard implements CanActivate {

  constructor(
    private classUnitsFacade: ClassUnitsFacade,
    private translationsFacade: TranslationsFacade,
    private usersFacade: UsersFacade
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.classUnitsFacade.getClassUnits();
    this.translationsFacade.getTranslationsGroup({ translationsScope: TranslationsScope.CONFIGURATION_CLASS_UNITS });
    this.usersFacade.getTeachers();
    return true;
  }
}
