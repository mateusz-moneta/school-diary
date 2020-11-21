import { User, UserType } from '@school-diary/school-diary/domain';
import { initialState, usersReducer, UsersState } from './users.reducer';

describe('User Reducer', () => {
  const createUserEntity = (id: number, first_name = '', last_name = '', type = UserType.STUDENT) =>
    ({
      id,
      first_name,
      last_name,
      type
    } as User);

  beforeEach(() => {});

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = usersReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
