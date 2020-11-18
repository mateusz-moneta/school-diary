import { fromLessonPlansActions } from './lesson-plans.actions';
import { LessonPlan } from '@school-diary/school-diary/domain';
import { initialState, lessonPlansReducer, LessonPlansState } from './lesson-plans.reducer';

describe('LessonPlans Reducer', () => {
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

  beforeEach(() => {});

  describe('valid LessonPlan actions', () => {
    it('getLessonPlansSuccess should return set the list of known LessonHours', () => {
      const lessonPlans = [
        createLessonPlanEntity(1),
        createLessonPlanEntity(2)
      ];

      const action = new fromLessonPlansActions.GetLessonPlansSuccess({
        data: lessonPlans,
        records_count: 2
      });

      const result: LessonPlansState = lessonPlansReducer(initialState, action);

      expect(result.lessonPlans.recordsCount).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = lessonPlansReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
