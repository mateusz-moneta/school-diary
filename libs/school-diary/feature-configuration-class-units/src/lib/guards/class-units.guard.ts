import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ClassUnitsFacade } from '@school-diary/school-diary/data-access-configuration-class-units';
import { UsersFacade } from '@school-diary/school-diary/data-access-users';

@Injectable()
export class ClassUnitsGuard implements CanActivate {

  constructor(private classUnitsFacade: ClassUnitsFacade, private usersFacade: UsersFacade) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.classUnitsFacade.getClassUnits();
    this.usersFacade.getTeachers();
    return true;
  }
}
