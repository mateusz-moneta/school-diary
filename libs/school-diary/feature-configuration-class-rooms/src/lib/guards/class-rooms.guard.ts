import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { ClassRoomsFacade } from '@school-diary/school-diary/data-access-configuration-class-rooms';
import { TranslationsFacade } from '@school-diary/school-diary/data-access-translations';
import { TranslationsScope } from '@school-diary/school-diary/domain';

@Injectable()
export class ClassRoomsGuard implements CanActivate {

  constructor(private classRoomsFacade: ClassRoomsFacade, private translationsFacade: TranslationsFacade) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.classRoomsFacade.getClassRooms();
    this.translationsFacade.getTranslationsGroup({ translationsScope: TranslationsScope.CONFIGURATION_CLASS_ROOMS});
    return true;
  }
}
