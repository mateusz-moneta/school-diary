import { BaseItem } from './base-item.interface';

export interface SelectedAssignment extends BaseItem {
  class_unit_id: number;
  user_id: number;
}
