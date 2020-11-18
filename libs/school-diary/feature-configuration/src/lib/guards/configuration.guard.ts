import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { UserFacade } from '@school-diary/school-diary/data-access-user';

@Injectable()
export class ConfigurationGuard implements CanActivate {

  constructor(private userFacade: UserFacade) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userFacade.isLoginUser$;
  }
}
