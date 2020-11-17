import { Subject } from '@school-diary/school-diary/domain';

describe('Subjects Selectors', () => {
  const createSubjectsEntity = (id: number, name = '', short_name = '', created_at = '', updated_at = '') =>
    ({
      id,
      name,
      short_name
    } as Subject);

  let state;

  beforeEach(() => {
    state = {
      subjects: {}
    };
  });

  describe('Subjects Selectors', () => {

  });
});
