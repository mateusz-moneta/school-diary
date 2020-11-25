import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, filter } from 'rxjs/operators';

import { UserSessionFacade } from '@school-diary/school-diary/data-access-user-session';
import { HttpStatusCode } from '@school-diary/school-diary/domain';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private sessionToken: string;

  constructor(private userSessionFacade: UserSessionFacade) {
    this.initSessionToken();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(
        !!this.sessionToken
          ? req.clone({
            setHeaders: {
              Authorization: `Bearer ${this.sessionToken}`
            }
          })
          : req.clone()
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === HttpStatusCode.UNAUTHORIZED) {
            this.userSessionFacade.logoutUser();
          }

          throw error;
        })
      );
  }

  private initSessionToken(): void {
    this.userSessionFacade.getToken$.pipe(filter(token => !!token)).subscribe((token: string) => {
      this.sessionToken = token;
    });
  }
}
