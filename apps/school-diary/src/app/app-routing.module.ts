import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainLayoutComponent } from './containers/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('@school-diary/feature-dashboard').then(m => m.FeatureDashboardModule)
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('@school-diary/feature-login').then(m => m.FeatureLoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('@school-diary/feature-register').then(m => m.FeatureRegisterModule)
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
