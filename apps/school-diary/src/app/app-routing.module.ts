import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('@school-diary/school-diary/feature-login').then(m => m.SchoolDiaryFeatureLoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('@school-diary/school-diary/feature-register').then(m => m.SchoolDiaryFeatureRegisterModule)
  },
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('@school-diary/school-diary/feature-dashboard').then(m => m.SchoolDiaryFeatureDashboardModule)
      },
      {
        path: 'configuration',
        loadChildren: () => import('@school-diary/school-diary/feature-configuration').then(m => m.SchoolDiaryFeatureConfigurationModule)
      },
      {
        path: '**',
        redirectTo: '/login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
