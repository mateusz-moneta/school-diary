import { TestBed } from '@angular/core/testing';

import { SubjectExistGuard } from './subject-exist.guard';

describe('SubjectExistGuard', () => {
  let guard: SubjectExistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SubjectExistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
