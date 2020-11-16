import * as SubjectsActions from './subjects.actions';
import { SubjectsState, initialState, subjectsReducer } from './subjects.reducer';

describe('Subjects Reducer', () => {
  const createSubjectsEntity = (id: string, name = '', short_name = '', created_at = '', updated_at = '') =>
    ({
      id,
      name,
      short_name
    } as SubjectsEntity);

  beforeEach(() => {});

  describe('valid Subjects actions', () => {
    it('getSubjectsSuccess should return set the list of known Subjects', () => {
      const subjects = [
        createSubjectsEntity('PRODUCT-AAA'),
        createSubjectsEntity('PRODUCT-zzz'),
      ];
      const action = SubjectsActions.loadSubjectsSuccess({ subjects });

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
