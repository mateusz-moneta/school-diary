import { CreateLessonPlanRequestPayload } from './create-lesson-plan.request-payload';

export interface UpdateLessonPlanRequestPayload extends CreateLessonPlanRequestPayload {
  id: number;
}
