import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './containers/register/register.component';
import { RegisterGuard } from './guards/register.guard';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    canActivate: [RegisterGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolDiaryFeatureRegisterRoutingModule {}
