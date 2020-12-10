import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ClassUnitsFacade } from '@school-diary/school-diary/data-access-configuration-class-units';

@Injectable()
export class ClassUnitExistGuard implements CanActivate {

  constructor(private classUnitsFacade: ClassUnitsFacade) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.classUnitsFacade.getClassUnit({ id: +next.paramMap.get('id') });
    return true;
  }
}
