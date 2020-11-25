import { BaseItem } from './base-item.interface';
import { User } from './user.interface';

export interface ClassUnit extends BaseItem {
  name: string;
  first_name: string;
  last_name: string;
}
