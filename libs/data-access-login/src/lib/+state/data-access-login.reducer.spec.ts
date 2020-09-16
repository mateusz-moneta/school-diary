import { DataAccessLoginEntity } from './data-access-login.models';
import * as DataAccessLoginActions from './data-access-login.actions';
import { State, initialState, reducer } from './data-access-login.reducer';

describe('DataAccessLogin Reducer', () => {
  const createDataAccessLoginEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as DataAccessLoginEntity);

  beforeEach(() => {});

  describe('valid DataAccessLogin actions', () => {
    it('loadDataAccessLoginSuccess should return set the list of known DataAccessLogin', () => {
      const dataAccessLogin = [
        createDataAccessLoginEntity('PRODUCT-AAA'),
        createDataAccessLoginEntity('PRODUCT-zzz'),
      ];
      const action = DataAccessLoginActions.loadDataAccessLoginSuccess({
        dataAccessLogin,
      });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
