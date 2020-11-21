import { State, userAdapter, initialState } from './user.reducer';
import * as UserSelectors from './user.selectors';

describe('User Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getUserId = (it) => it['id'];
  const createUserEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as UserEntity);

  let state;

  beforeEach(() => {
    state = {
      user: userAdapter.setAll(
        [
          createUserEntity('PRODUCT-AAA'),
          createUserEntity('PRODUCT-BBB'),
          createUserEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });
});
