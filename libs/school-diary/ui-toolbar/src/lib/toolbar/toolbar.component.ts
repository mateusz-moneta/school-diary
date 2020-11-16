import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'school-diary-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() title: string;
  @Output() open = new EventEmitter<void>();

  onOpen(): void {
    this.open.emit()
  }
}
