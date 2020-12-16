import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { SubjectsFacade } from '@school-diary/school-diary/data-access-configuration-subjects';
import { TranslationsFacade } from '@school-diary/school-diary/data-access-translations';
import { TranslationsScope } from '@school-diary/school-diary/domain';

@Injectable()
export class SubjectsGuard implements CanActivate {

  constructor(private subjectsFacade: SubjectsFacade, private translationsFacade: TranslationsFacade) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.subjectsFacade.getSubjects();
    this.translationsFacade.getTranslationsGroup({ translationsScope: TranslationsScope.CONFIGURATION_SUBJECTS });
    return true;
  }
}
