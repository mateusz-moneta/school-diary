import { BaseItem } from './base-item.interface';
import { ClassRoom } from './class-room.interface';
import { ClassUnit } from './class-unit.interface';
import { LessonHour } from './lesson-hour.interface';
import { Subject } from './subject.interface';
import { WorkDay } from './work-day.interface';
import { User } from './user.interface';

export interface LessonPlan extends BaseItem {
  class_room: ClassRoom
  class_unit: ClassUnit;
  lesson_hour: LessonHour;
  subject: Subject;
  work_day: WorkDay;
  user: User;
}
