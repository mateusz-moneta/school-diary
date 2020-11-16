import { SidenavItem } from '@school-diary/school-diary/domain';

export const sidenavConfig: SidenavItem[] = [
  {
    title: 'CONFIGURATION.TITLE',
    colorSaturation: '600',
    children: [
      {
        title: 'CONFIGURATION.SUBJECTS',
        path: '/configuration/subjects',
        icon: 'attach_money'
      }
    ]
  }
];
