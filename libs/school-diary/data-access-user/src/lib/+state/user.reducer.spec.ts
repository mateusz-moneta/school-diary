import { User, UserType } from '@school-diary/school-diary/domain';
import { fromUserActions } from './user.actions';
import { initialState, userReducer, UserState } from './user.reducer';

describe('User Reducer', () => {
  const createUserEntity = (id: number, first_name = '', last_name = '', type = UserType.STUDENT) =>
    ({
      id,
      first_name,
      last_name,
      type
    } as User);

  beforeEach(() => {});

  describe('valid User actions', () => {
    it('loginUserSuccess should return set the list of known User', () => {
      const action = new fromUserActions.LoginUserSuccess({
        user: createUserEntity(1, 'Mateusz', 'Moneta', UserType.SYSTEM_ADMINISTRATOR),
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.JC6qKuH9SG0SIiYSfhZUFTtirxN9Q47buLk0DPFFFzE'
      });

      const result: UserState = userReducer(initialState, action);

      expect(result.loginUserInProgress).toBe(false);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = userReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
