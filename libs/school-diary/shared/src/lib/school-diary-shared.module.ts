import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot()
  ],
  exports: [ToastrModule]
})
export class SchoolDiarySharedModule {}
