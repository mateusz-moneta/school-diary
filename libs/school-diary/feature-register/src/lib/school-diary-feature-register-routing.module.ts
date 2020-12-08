import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './containers/register/register.component';
import { RegisterGuard } from './guards/register.guard';

const routes: Routes = [
  {
    canActivate: [RegisterGuard],
    path: '',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolDiaryFeatureRegisterRoutingModule {}
