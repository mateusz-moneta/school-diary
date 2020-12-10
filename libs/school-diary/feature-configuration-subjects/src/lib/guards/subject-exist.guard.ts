import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { SubjectsFacade } from '@school-diary/school-diary/data-access-configuration-subjects';

@Injectable()
export class SubjectExistGuard implements CanActivate {

  constructor(private subjectsFacade: SubjectsFacade) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.subjectsFacade.getSubject({ id: +next.paramMap.get('id') });
    return true;
  }
}
