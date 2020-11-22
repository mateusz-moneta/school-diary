import { Assignment } from '@school-diary/school-diary/domain';

describe('Assignments Selectors', () => {
  const createAssignmentEntity = (id: number, class_unit = {}, user = {}) =>
    ({
      id,
      class_unit,
      user
    } as Assignment);

  let state;

  beforeEach(() => {
    state = {
      assignments: {}
    }
  });

  describe('ClassRooms Selectors', () => {

  });
});
