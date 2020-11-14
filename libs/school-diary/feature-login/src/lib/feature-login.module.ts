import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';

import { DataAccessUserModule } from '@school-diary/school-diary/data-access-user';
import { FeatureLoginRoutingModule } from './feature-login-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { SharedModule } from '@school-diary/school-diary/shared';
import { UiSingleControlModule } from '@school-diary/school-diary/ui-single-control';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    DataAccessUserModule,
    FeatureLoginRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    SharedModule,
    TranslateModule.forChild(),
    UiSingleControlModule
  ],
  providers: [LoginGuard]
})
export class FeatureLoginModule {}
