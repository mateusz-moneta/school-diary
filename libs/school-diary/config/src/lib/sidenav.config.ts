import { SidenavItem } from '@school-diary/school-diary/domain';

export const sidenavConfig: SidenavItem[] = [
  {
    title: 'CONFIGURATION.TITLE',
    colorSaturation: '600',
    children: [
      {
        title: 'CONFIGURATION.CLASS-ROOMS',
        path: '/configuration/class-rooms'
      },
      {
        title: 'CONFIGURATION.LESSON-HOURS',
        path: '/configuration/lesson-hours'
      },
      {
        title: 'CONFIGURATION.SUBJECTS',
        path: '/configuration/subjects'
      }
    ]
  }
];
