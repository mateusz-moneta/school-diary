import { BaseItem } from './base-item.interface';
import { ClassUnit } from './class-unit.interface';
import { User } from './user.interface';

export interface Assignment extends BaseItem {
  class_unit: ClassUnit;
  user: User;
}
