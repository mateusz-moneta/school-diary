import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { FeatureRegisterRoutingModule } from './feature-register-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RegisterComponent } from './containers/register/register.component';
import { SharedModule } from '@school-diary/school-diary/shared';
import { UiSingleControlModule } from '@school-diary/school-diary/ui-single-control';

@NgModule({
  imports: [
    CommonModule,
    FeatureRegisterRoutingModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    SharedModule,
    TranslateModule.forChild(),
    UiSingleControlModule
  ],
  declarations: [RegisterComponent]
})
export class FeatureRegisterModule {}
