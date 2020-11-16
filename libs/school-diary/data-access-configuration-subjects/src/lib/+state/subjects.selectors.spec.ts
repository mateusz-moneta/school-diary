import { SubjectsEntity } from './subjects.models';
import { State, subjectsAdapter, initialState } from './subjects.reducer';
import * as SubjectsSelectors from './subjects.selectors';

describe('Subjects Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getSubjectsId = (it) => it['id'];
  const createSubjectsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SubjectsEntity);

  let state;

  beforeEach(() => {
    state = {
      subjects: subjectsAdapter.setAll(
        [
          createSubjectsEntity('PRODUCT-AAA'),
          createSubjectsEntity('PRODUCT-BBB'),
          createSubjectsEntity('PRODUCT-CCC'),
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

  describe('Subjects Selectors', () => {
    it('getAllSubjects() should return the list of Subjects', () => {
      const results = SubjectsSelectors.getAllSubjects(state);
      const selId = getSubjectsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = SubjectsSelectors.getSelected(state);
      const selId = getSubjectsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getSubjectsLoaded() should return the current 'loaded' status", () => {
      const result = SubjectsSelectors.getSubjectsLoaded(state);

      expect(result).toBe(true);
    });

    it("getSubjectsError() should return the current 'error' state", () => {
      const result = SubjectsSelectors.getSubjectsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
