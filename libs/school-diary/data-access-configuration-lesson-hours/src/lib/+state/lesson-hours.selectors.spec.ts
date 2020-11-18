import { LessonHour } from '@school-diary/school-diary/domain';

describe('LessonHours Selectors', () => {
  const createLessonHourEntity = (id: number, hour_from = '00', minute_from = '00', hour_to = '00', minute_to = '00') =>
    ({
      id,
      hour_from,
      minute_from,
      hour_to,
      minute_to
    } as LessonHour);

  let state;

  beforeEach(() => {
    state = {
      lessonHours: {}
    }
  });

  describe('LessonHours Selectors', () => {

  });
});
