import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { SelectOption } from '@school-diary/school-diary/domain';

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
  max: number | string;

  @Input()
  min: number | string;

  @Input()
  options: SelectOption[] = [];

  @Input()
  placeholder: string;

  @Input()
  type = 'text';
}
