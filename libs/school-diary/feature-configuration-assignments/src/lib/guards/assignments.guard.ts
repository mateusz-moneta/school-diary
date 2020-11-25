import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AssignmentsFacade } from '@school-diary/school-diary/data-access-configuration-assignments';
import { ClassUnitsFacade } from '@school-diary/school-diary/data-access-configuration-class-units';

@Injectable()
export class AssignmentsGuard implements CanActivate {

  constructor(
    private assignmentsFacade: AssignmentsFacade,
    private classUnitsFacade: ClassUnitsFacade
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.assignmentsFacade.getAssignments();
    this.classUnitsFacade.getClassUnits();
    return true;
  }
}
