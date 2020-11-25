import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { UserSessionFacade } from '@school-diary/school-diary/data-access-user-session';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private userSessionFacade: UserSessionFacade) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userSessionFacade.isLogoutUser$;
  }
}
