import { User, UserType } from '@school-diary/school-diary/domain';
import { fromUserSessionActions } from './user-session.actions';
import { initialState, userSessionReducer, UserSessionState } from './user-session.reducer';

describe('UserSession Reducer', () => {
  const createUserEntity = (id: number, first_name = '', last_name = '', type = UserType.STUDENT) =>
    ({
      id,
      first_name,
      last_name,
      type
    } as User);

  beforeEach(() => {});

  describe('valid UserSession actions', () => {
    it('loginUserSuccess should return set the list of known UserSession', () => {
      const action = new fromUserSessionActions.LoginUserSuccess({
        user: createUserEntity(1, 'Mateusz', 'Moneta', UserType.SYSTEM_ADMINISTRATOR),
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.JC6qKuH9SG0SIiYSfhZUFTtirxN9Q47buLk0DPFFFzE'
      });

      const result: UserSessionState = userSessionReducer(initialState, action);

      expect(result.loginUserInProgress).toBe(false);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = userSessionReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
