import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

import { ErrorInterceptor } from './interceptors/error.interceptor';

@NgModule({
  imports: [CommonModule, ToastrModule],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  }]
})
export class SchoolDiaryCoreModule {
  constructor(@Optional() @SkipSelf() parentModule: SchoolDiaryCoreModule) {
    if (parentModule) {
      throw new Error('SchoolDiaryCoreModule has already been loaded. You should only import Core modules in the AppModule only.');
    }
  }
}
