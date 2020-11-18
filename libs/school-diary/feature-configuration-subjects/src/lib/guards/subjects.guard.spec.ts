import { TestBed } from '@angular/core/testing';

import { SubjectsGuard } from './subjects.guard';

describe('SubjectsGuard', () => {
  let guard: SubjectsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SubjectsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
