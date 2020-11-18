import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ClassRoomsFacade } from '@school-diary/school-diary/data-access-configuration-class-rooms';

@Injectable()
export class ClassRoomsGuard implements CanActivate {

  constructor(private classRoomsFacade: ClassRoomsFacade) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.classRoomsFacade.getClassRooms();
    return true;
  }
}
