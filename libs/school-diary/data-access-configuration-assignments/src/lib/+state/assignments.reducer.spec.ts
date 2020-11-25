import { Assignment } from '@school-diary/school-diary/domain';
import { assignmentsReducer, AssignmentsState, initialState } from './assignments.reducer';
import { fromAssignmentsActions } from './assignments.actions';

describe('Assignments Reducer', () => {
  const createAssignmentEntity = (id: number, class_unit = {}, user = {}) =>
    ({
      id,
      class_unit,
      user
    } as Assignment);

  beforeEach(() => {});

  describe('valid Assignments actions', () => {
    it('getAssignmentsSuccess should return set the list of known Assignments', () => {
      const assignments = [
        createAssignmentEntity(1, {}, {}),
        createAssignmentEntity(2, {}, {}),
      ];
      const action = new fromAssignmentsActions.GetAssignmentsSuccess({
        data: assignments,
        records_count: 2
      });

      const result: AssignmentsState = assignmentsReducer(initialState, action);

      expect(result.assignments.recordsCount).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = assignmentsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
