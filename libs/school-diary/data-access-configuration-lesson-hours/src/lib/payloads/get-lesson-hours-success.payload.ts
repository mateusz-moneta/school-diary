import { LessonHourSuccessPayload } from './lesson-hour-success.payload';

export interface GetLessonHoursSuccessPayload {
  data: LessonHourSuccessPayload[]
  records_count: number;
}
