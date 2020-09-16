import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureLoginRoutingModule } from './feature-login-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { SharedModule } from '@school-diary/shared';

@NgModule({
  imports: [CommonModule, FeatureLoginRoutingModule, SharedModule],
  declarations: [LoginComponent],
})
export class FeatureLoginModule {}
