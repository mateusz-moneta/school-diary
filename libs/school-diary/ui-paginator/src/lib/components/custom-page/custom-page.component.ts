import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'school-diary-custom-page',
  templateUrl: './custom-page.component.html',
  styleUrls: ['./custom-page.component.scss']
})
export class CustomPageComponent {
  @Input()
  index: number;

  @Input()
  isSelected = false;

  @Output()
  selectPage = new EventEmitter<number>();

  selectPageAction(): void {
    this.selectPage.emit(this.index);
  }
}
