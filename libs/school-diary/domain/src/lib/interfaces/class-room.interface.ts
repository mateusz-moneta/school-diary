import { BaseItem } from './base-item.interface';

export interface ClassRoom extends BaseItem {
  designation: string;
  location: string;
  floor: number;
}
