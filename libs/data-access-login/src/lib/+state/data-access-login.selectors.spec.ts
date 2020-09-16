import { DataAccessLoginEntity } from './data-access-login.models';
import {
  State,
  dataAccessLoginAdapter,
  initialState,
} from './data-access-login.reducer';
import * as DataAccessLoginSelectors from './data-access-login.selectors';

describe('DataAccessLogin Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getDataAccessLoginId = (it) => it['id'];
  const createDataAccessLoginEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as DataAccessLoginEntity);

  let state;

  beforeEach(() => {
    state = {
      dataAccessLogin: dataAccessLoginAdapter.setAll(
        [
          createDataAccessLoginEntity('PRODUCT-AAA'),
          createDataAccessLoginEntity('PRODUCT-BBB'),
          createDataAccessLoginEntity('PRODUCT-CCC'),
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

  describe('DataAccessLogin Selectors', () => {
    it('getAllDataAccessLogin() should return the list of DataAccessLogin', () => {
      const results = DataAccessLoginSelectors.getAllDataAccessLogin(state);
      const selId = getDataAccessLoginId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = DataAccessLoginSelectors.getSelected(state);
      const selId = getDataAccessLoginId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getDataAccessLoginLoaded() should return the current 'loaded' status", () => {
      const result = DataAccessLoginSelectors.getDataAccessLoginLoaded(state);

      expect(result).toBe(true);
    });

    it("getDataAccessLoginError() should return the current 'error' state", () => {
      const result = DataAccessLoginSelectors.getDataAccessLoginError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
