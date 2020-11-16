import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';

import { SchoolDiaryDataAccessUserModule } from '@school-diary/school-diary/data-access-user';
import { SchoolDiaryFeatureLoginRoutingModule } from './school-diary-feature-login-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { SchoolDiarySharedModule } from '@school-diary/school-diary/shared';
import { SchoolDiaryUiSingleControlModule } from '@school-diary/school-diary/ui-single-control';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SchoolDiaryDataAccessUserModule,
    SchoolDiaryFeatureLoginRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    SchoolDiarySharedModule,
    TranslateModule.forChild(),
    SchoolDiaryUiSingleControlModule
  ],
  providers: [LoginGuard]
})
export class SchoolDiaryFeatureLoginModule {}
