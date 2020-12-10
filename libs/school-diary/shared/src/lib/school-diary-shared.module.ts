import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

import { SchoolDiaryDataAccessSettingsModule } from '@school-diary/school-diary/data-access-settings';

@NgModule({
  imports: [
    CommonModule,
    SchoolDiaryDataAccessSettingsModule,
    ToastrModule.forRoot()
  ],
  exports: [ToastrModule]
})
export class SchoolDiarySharedModule {}
