import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRegisterRoutingModule } from './feature-register-routing.module';
import { RegisterComponent } from './containers/register/register.component';
import { SharedModule } from '@school-diary/shared';

@NgModule({
  imports: [CommonModule, FeatureRegisterRoutingModule, SharedModule],
  declarations: [RegisterComponent]
})
export class FeatureRegisterModule {}
