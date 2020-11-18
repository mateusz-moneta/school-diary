import { fromLessonHoursActions } from './lesson-hours.actions';
import { LessonHour } from '@school-diary/school-diary/domain';
import { initialState, lessonHoursReducer, LessonHoursState } from './lesson-hours.reducer';

describe('LessonHours Reducer', () => {
  const createLessonHourEntity = (id: number, hour_from = '00', minute_from = '00', hour_to = '00', minute_to = '00') =>
    ({
      id,
      hour_from,
      minute_from,
      hour_to,
      minute_to
    } as LessonHour);

  beforeEach(() => {});

  describe('valid LessonHours actions', () => {
    it('getLessonHoursSuccess should return set the list of known LessonHours', () => {
      const lessonHours = [
        createLessonHourEntity(1, '08', '00', '08', '45'),
        createLessonHourEntity(2, '09', '00', '09', '45'),
      ];

      const action = new fromLessonHoursActions.GetLessonHoursSuccess({
        data: lessonHours,
        records_count: 2
      });

      const result: LessonHoursState = lessonHoursReducer(initialState, action);

      expect(result.lessonHours.recordsCount).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = lessonHoursReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
