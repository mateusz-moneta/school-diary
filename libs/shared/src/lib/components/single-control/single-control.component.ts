import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'school-diary-single-control',
  templateUrl: './single-control.component.html',
  styleUrls: ['./single-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleControlComponent {
  @Input()
  control: AbstractControl;

  @Input()
  label: string;

  @Input()
  placeholder: string;

  @Input()
  type = 'text';
}
