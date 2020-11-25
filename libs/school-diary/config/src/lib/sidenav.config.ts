import { SidenavItem } from '@school-diary/school-diary/domain';

export const sidenavConfig: SidenavItem[] = [
  {
    title: 'CONFIGURATION.TITLE',
    colorSaturation: '600',
    expanded: true,
    children: [
      {
        title: 'CONFIGURATION.ASSIGNMENTS',
        path: '/configuration/assignments'
      },
      {
        title: 'CONFIGURATION.CLASS-ROOMS',
        path: '/configuration/class-rooms'
      },
      {
        title: 'CONFIGURATION.CLASS-UNITS',
        path: '/configuration/class-units'
      },
      {
        title: 'CONFIGURATION.LESSON-HOURS',
        path: '/configuration/lesson-hours'
      },
      {
        title: 'CONFIGURATION.LESSON-PLANS',
        path: '/configuration/lesson-plans'
      },
      {
        title: 'CONFIGURATION.SUBJECTS',
        path: '/configuration/subjects'
      }
    ]
  }
];
