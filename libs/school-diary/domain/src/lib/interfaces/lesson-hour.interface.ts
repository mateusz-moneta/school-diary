import { BaseItem } from './base-item.interface';

export interface LessonHour extends BaseItem {
  hour_from: string;
  minute_from: string;
  hour_to: string;
  minute_to: string;
  location: string;
  floor: number;
}
