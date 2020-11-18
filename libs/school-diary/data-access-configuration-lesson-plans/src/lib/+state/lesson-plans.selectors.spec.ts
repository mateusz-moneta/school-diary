import { LessonPlan } from '@school-diary/school-diary/domain';

describe('LessonPlans Selectors', () => {
  const createLessonPlanEntity = (id: number, class_room = {}, class_unit = {}, lesson_hour = {}, subject = {}, work_day = {}, user = {}) =>
    ({
      id,
      class_room,
      class_unit,
      lesson_hour,
      subject,
      work_day,
      user
    } as LessonPlan);

  let state;

  beforeEach(() => {
    state = {
      lessonPlans: {}
    }
  });

  describe('LessonPlans Selectors', () => {

  });
});
