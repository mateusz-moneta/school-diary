import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SchoolDiaryDataAccessUserModule } from '@school-diary/school-diary/data-access-user';
import { SchoolDiaryFeatureRegisterRoutingModule } from './school-diary-feature-register-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RegisterComponent } from './containers/register/register.component';
import { SchoolDiarySharedModule } from '@school-diary/school-diary/shared';
import { SchoolDiaryUiSingleControlModule } from '@school-diary/school-diary/ui-single-control';

@NgModule({
  imports: [
    CommonModule,
    SchoolDiaryDataAccessUserModule,
    SchoolDiaryFeatureRegisterRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    SchoolDiarySharedModule,
    TranslateModule.forChild(),
    SchoolDiaryUiSingleControlModule
  ],
  declarations: [RegisterComponent]
})
export class SchoolDiaryFeatureRegisterModule {}
