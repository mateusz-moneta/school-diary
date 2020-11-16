import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'school-diary-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {
  @Input() icon = '';
  @Input() hint = '';
  @Input() routerLink: string | any[] = '/';

  @Output() navigate = new EventEmitter();
}
