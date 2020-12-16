import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SettingsComponent } from './containers/settings/settings.component';
import { SettingsGuard } from './guards/settings.guard';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    canActivate: [SettingsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolDiaryFeatureSettingsRoutingModule {}
