import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RegisterComponent } from './containers/register/register.component';
import { RegisterGuard } from './guards/register.guard';
import { SchoolDiaryDataAccessUserRegistrationModule } from '@school-diary/school-diary/data-access-user-registration';
import { SchoolDiaryFeatureRegisterRoutingModule } from './school-diary-feature-register-routing.module';
import { SchoolDiarySharedModule } from '@school-diary/school-diary/shared';
import { SchoolDiaryUiSingleControlModule } from '@school-diary/school-diary/ui-single-control';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    SchoolDiaryDataAccessUserRegistrationModule,
    SchoolDiaryFeatureRegisterRoutingModule,
    SchoolDiarySharedModule,
    SchoolDiaryUiSingleControlModule,
    TranslateModule.forChild()
  ],
  declarations: [RegisterComponent],
  providers: [RegisterGuard]
})
export class SchoolDiaryFeatureRegisterModule {}
