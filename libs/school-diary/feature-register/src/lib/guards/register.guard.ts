import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { UserSessionFacade } from '@school-diary/school-diary/data-access-user-session';

@Injectable()
export class RegisterGuard implements CanActivate {

  constructor(private router: Router, private userSessionFacade: UserSessionFacade) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userSessionFacade.isLogoutUser$
      .pipe(
        tap((isLogoutUser: boolean) => {
          if (!isLogoutUser) {
            this.router.navigate(['/dashboard']);
          }
        }),
        map((isLogoutUser: boolean) => isLogoutUser)
      )
  }
}
