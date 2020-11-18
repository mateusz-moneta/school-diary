import { LessonPlanSuccessPayload } from './lesson-plan-success.payload';

export interface GetLessonPlansSuccessPayload {
  data: LessonPlanSuccessPayload[]
  records_count: number;
}
