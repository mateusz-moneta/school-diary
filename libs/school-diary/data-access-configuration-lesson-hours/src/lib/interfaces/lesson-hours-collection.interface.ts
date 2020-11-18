import { LessonHour } from '@school-diary/school-diary/domain';

export interface LessonHoursCollection {
  data: LessonHour[];
  recordsCount: number;
}
