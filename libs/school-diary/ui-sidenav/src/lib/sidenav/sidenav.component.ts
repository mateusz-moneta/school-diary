import { Component, Input } from '@angular/core';

import { SidenavItem } from '@school-diary/school-diary/domain';

@Component({
  selector: 'school-diary-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() navigation: SidenavItem[] = [];
}
