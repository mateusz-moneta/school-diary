import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('@school-diary/feature-login').then(m => m.FeatureLoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('@school-diary/feature-register').then(m => m.FeatureRegisterModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('@school-diary/feature-dashboard').then(m => m.FeatureDashboardModule)
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
