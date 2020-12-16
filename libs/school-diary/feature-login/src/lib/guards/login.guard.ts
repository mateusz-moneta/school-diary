import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { TranslationsFacade } from '@school-diary/school-diary/data-access-translations';
import { TranslationsScope } from '@school-diary/school-diary/domain';
import { UserSessionFacade } from '@school-diary/school-diary/data-access-user-session';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    private router: Router,
    private translationsFacade: TranslationsFacade,
    private userSessionFacade: UserSessionFacade
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userSessionFacade.isLogoutUser$
      .pipe(
        tap((isLogoutUser: boolean) => {
          if (!isLogoutUser) {
            this.router.navigate(['/dashboard']);
            return;
          }

          this.translationsFacade.getTranslationsGroup({ translationsScope: TranslationsScope.LOGIN });
        }),
        map((isLogoutUser: boolean) => isLogoutUser)
      )
  }
}
