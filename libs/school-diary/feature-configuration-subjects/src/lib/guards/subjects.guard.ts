import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { SubjectsFacade } from '@school-diary/school-diary/data-access-configuration-subjects';

@Injectable()
export class SubjectsGuard implements CanActivate {

  constructor(private subjectsFacade: SubjectsFacade) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.subjectsFacade.getSubjects();
    return true;
  }
}
