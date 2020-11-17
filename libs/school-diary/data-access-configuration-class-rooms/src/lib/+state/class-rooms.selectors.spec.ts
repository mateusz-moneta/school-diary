import { ClassRoom } from '@school-diary/school-diary/domain';

describe('ClassRooms Selectors', () => {
  const createClassRoomEntity = (id: number, designation = '', floor = 0, location = '') =>
    ({
      id,
      designation,
      floor,
      location
    } as ClassRoom);

  let state;

  beforeEach(() => {
    state = {
      classRooms: {}
    }
  });

  describe('ClassRooms Selectors', () => {

  });
});
