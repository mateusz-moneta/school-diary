import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ConfigurationGuard } from './guards/configuration.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [ConfigurationGuard],
    children: [
      {
        path: 'class-rooms',
        loadChildren: () => import('@school-diary/school-diary/feature-configuration-class-rooms').then(m => m.SchoolDiaryFeatureConfigurationClassRoomsModule)
      },
      {
        path: 'class-units',
        loadChildren: () => import('@school-diary/school-diary/feature-configuration-class-units').then(m => m.SchoolDiaryFeatureConfigurationClassUnitsModule)
      },
      {
        path: 'lesson-hours',
        loadChildren: () => import('@school-diary/school-diary/feature-configuration-lesson-hours').then(m => m.SchoolDiaryFeatureConfigurationLessonHoursModule)
      },
      {
        path: 'lesson-plans',
        loadChildren: () => import('@school-diary/school-diary/feature-configuration-lesson-plans').then(m => m.SchoolDiaryFeatureConfigurationLessonPlansModule)
      },
      {
        path: 'subjects',
        loadChildren: () => import('@school-diary/school-diary/feature-configuration-subjects').then(m => m.SchoolDiaryFeatureConfigurationSubjectsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolDiaryFeatureConfigurationRoutingModule {}
