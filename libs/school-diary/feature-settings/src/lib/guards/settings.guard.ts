import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

import { TranslationsFacade } from '@school-diary/school-diary/data-access-translations';
import { TranslationsScope } from '@school-diary/school-diary/domain';

@Injectable()
export class SettingsGuard implements CanActivate {

  constructor(private translationsFacade: TranslationsFacade) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.translationsFacade.getTranslationsGroup({ translationsScope: TranslationsScope.SETTINGS });
    return true;
  }
}
