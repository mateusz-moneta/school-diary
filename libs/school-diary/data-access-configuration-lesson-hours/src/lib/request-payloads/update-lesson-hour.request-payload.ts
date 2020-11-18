import { CreateLessonHourRequestPayload } from './create-lesson-hour.request-payload';

export interface UpdateLessonHourRequestPayload extends CreateLessonHourRequestPayload {
  id: number;
}
