import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { AssignmentsFacade } from '@school-diary/school-diary/data-access-configuration-assignments';

@Injectable()
export class AssignmentExistGuard implements CanActivate {

  constructor(private assignmentsFacade: AssignmentsFacade) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.assignmentsFacade.getAssignment({ id: +next.paramMap.get('id') });
    return true;
  }
}
