import { SidenavItem } from '@school-diary/school-diary/domain';

export const sidenavConfig: SidenavItem[] = [
  {
    title: 'CONFIGURATION.TITLE',
    colorSaturation: '600',
    children: [
      {
        title: 'CONFIGURATION.CLASS-ROOMS',
        path: '/configuration/class-rooms',
        icon: 'attach_money'
      },
      {
        title: 'CONFIGURATION.SUBJECTS',
        path: '/configuration/subjects',
        icon: 'attach_money'
      }
    ]
  }
];
