import { ClassRoom } from '@school-diary/school-diary/domain';
import { lessonHoursReducer, ClassRoomsState, initialState } from './class-rooms.reducer';
import { fromClassRoomsActions } from './class-rooms.actions';

describe('ClassRooms Reducer', () => {
  const createClassRoomEntity = (id: number, designation = '', floor = 0, location = '') =>
    ({
      id,
      designation,
      floor,
      location
    } as ClassRoom);

  beforeEach(() => {});

  describe('valid ClassRooms actions', () => {
    it('getClassRoomsSuccess should return set the list of known ClassRooms', () => {
      const classRooms = [
        createClassRoomEntity(1, 'Main', 0, 'Main Location'),
        createClassRoomEntity(2, 'Main', 1, 'Main Location'),
      ];
      const action = new fromClassRoomsActions.GetClassRoomsSuccess({
        data: classRooms,
        records_count: 2
      });

      const result: ClassRoomsState = lessonHoursReducer(initialState, action);

      expect(result.classRooms.recordsCount).toBe(2);
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
