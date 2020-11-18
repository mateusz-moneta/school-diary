import { ClassUnit } from '@school-diary/school-diary/domain';

describe('ClassUnits Selectors', () => {
  const createClassUnitEntity = (id: number, name = '', user = null, created_at = '', updated_at = '') =>
    ({
      id,
      name,
      user,
      created_at,
      updated_at
    } as ClassUnit);

  let state;

  beforeEach(() => {
    state = {
      classUnits: {}
    }
  });

  describe('ClassUnits Selectors', () => {

  });
});
