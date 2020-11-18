import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { UserFacade } from '@school-diary/school-diary/data-access-user';

@Injectable()
export class DashboardGuard implements CanActivate {

  constructor(private router: Router, private userFacade: UserFacade) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userFacade.isLoginUser$
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
