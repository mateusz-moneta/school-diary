import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { UserSessionFacade } from '@school-diary/school-diary/data-access-user-session';

@Injectable()
export class ConfigurationGuard implements CanActivate {

  constructor(private router: Router, private userSessionFacade: UserSessionFacade) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userSessionFacade.isLoginUser$
      .pipe(
        tap((isLoginUser: boolean) => {
          if (!isLoginUser) {
            this.router.navigate(['/login']);
          }
        }),
        map((isLoginUser: boolean) => isLoginUser)
      )
  }
}
