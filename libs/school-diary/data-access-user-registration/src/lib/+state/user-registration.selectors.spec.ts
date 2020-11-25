import { User, UserType } from '@school-diary/school-diary/domain';

describe('User Selectors', () => {
  const createUserEntity = (id: number, first_name = '', last_name = '', type = UserType.STUDENT) =>
    ({
      id,
      first_name,
      last_name,
      type
    } as User);

  let state;

  beforeEach(() => {
    state = {
      user: []
    };
  });
});
