import { BaseItem } from './base-item.interface';

export interface SelectedLessonPlan extends BaseItem {
  class_room_id: number;
  class_unit_id: number;
  lesson_hour_id: number;
  subject_id: number;
  work_day_id: number;
  user_id: number;
}
