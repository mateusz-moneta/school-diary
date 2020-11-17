import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpStatusCode } from '@school-diary/school-diary/domain';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toastrService: ToastrService, private translateService: TranslateService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((response: HttpErrorResponse) => {
        switch (response.status) {
          case HttpStatusCode.INTERNAL_SERVER_ERROR:
            break;

          case HttpStatusCode.GATEWAY_TIMEOUT:
            this.toastrService.error(this.translateService.instant('SHARED.CONNECTION-ERROR'));
            break;

          default:
            this.toastrService.error(this.translateService.instant(`SHARED.${response.error.errorKey}` || 'SHARED.UNEXPECTED_ERROR_OCCURRED'));
            break;
        }

        return throwError(response);
      })
    );
  }
}
