import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SettingsComponent } from './containers/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolDiaryFeatureSettingsRoutingModule {}
