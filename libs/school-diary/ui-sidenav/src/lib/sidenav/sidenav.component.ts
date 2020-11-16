import { Component, Input } from '@angular/core';

import { sidenavConfig } from '@school-diary/school-diary/config';

@Component({
  selector: 'school-diary-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() open = false;

  navigation = sidenavConfig;
}
