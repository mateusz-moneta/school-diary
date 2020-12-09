import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'school-diary-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() opened: boolean;
  @Input() title: string;
  @Output() close = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();
  @Output() open = new EventEmitter<void>();

  toggleSidenav(): void {
    this.opened ? this.close.emit() : this.open.emit();
  }

  onLogout(): void {
    this.logout.emit();
  }
}
