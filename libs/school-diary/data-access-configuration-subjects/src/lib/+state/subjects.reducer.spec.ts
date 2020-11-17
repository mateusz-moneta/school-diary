import { fromSubjectsActions } from './subjects.actions';
import { Subject } from '@school-diary/school-diary/domain';
import { SubjectsState, initialState, subjectsReducer } from './subjects.reducer';

describe('Subjects Reducer', () => {
  const createSubjectsEntity = (id: number, name = '', short_name = '', created_at = '', updated_at = '') =>
    ({
      id,
      name,
      short_name
    } as Subject);

  beforeEach(() => {});

  describe('valid Subjects actions', () => {
    it('getSubjectsSuccess should return set the list of known Subjects', () => {
      const subjects = [
        createSubjectsEntity(1, 'Art', 'ART'),
        createSubjectsEntity(2, 'Information Technology', 'IT'),
      ];
      const action = new fromSubjectsActions.GetSubjectsSuccess({
        data: subjects,
        records_count: 2
      });

      const result: SubjectsState = subjectsReducer(initialState, action);

      expect(result.subjects.data.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = subjectsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
