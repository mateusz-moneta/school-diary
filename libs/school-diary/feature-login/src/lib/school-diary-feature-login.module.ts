import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';

import { LoginComponent } from './containers/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { SchoolDiaryFeatureLoginRoutingModule } from './school-diary-feature-login-routing.module';
import { SchoolDiarySharedModule } from '@school-diary/school-diary/shared';
import { SchoolDiaryUiSingleControlModule } from '@school-diary/school-diary/ui-single-control';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    SchoolDiaryFeatureLoginRoutingModule,
    SchoolDiarySharedModule,
    SchoolDiaryUiSingleControlModule,
    TranslateModule.forChild()
  ],
  providers: [LoginGuard]
})
export class SchoolDiaryFeatureLoginModule {}
