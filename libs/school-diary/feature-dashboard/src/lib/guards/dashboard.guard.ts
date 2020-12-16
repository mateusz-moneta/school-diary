import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { UserSessionFacade } from '@school-diary/school-diary/data-access-user-session';
import { TranslationsFacade } from '@school-diary/school-diary/data-access-translations';
import { TranslationsScope } from '@school-diary/school-diary/domain';

@Injectable()
export class DashboardGuard implements CanActivate {

  constructor(
    private router: Router,
    private translationsFacade: TranslationsFacade,
    private userSessionFacade: UserSessionFacade
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userSessionFacade.isLoginUser$
      .pipe(
        tap((isLoginUser: boolean) => {
          if (!isLoginUser) {
            this.router.navigate(['/login']);
            return;
          }

          this.translationsFacade.getTranslationsGroup({ translationsScope: TranslationsScope.DASHBOARD });
        }),
        map((isLoginUser: boolean) => isLoginUser)
      )
  }
}
