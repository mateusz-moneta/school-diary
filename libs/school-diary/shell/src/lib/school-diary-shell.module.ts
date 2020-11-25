import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { httpLoaderFactory } from '@school-diary/school-diary/util-http-loader-factory';
import { SchoolDiaryDataAccessUserSessionModule } from '@school-diary/school-diary/data-access-user-session';
import { SchoolDiarySharedModule } from '@school-diary/school-diary/shared';

@NgModule({
  imports: [
    CommonModule,
    SchoolDiaryDataAccessUserSessionModule,
    SchoolDiarySharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
export class SchoolDiaryShellModule {}
