import { TestBed } from '@angular/core/testing';

import { AssignmentExistGuard } from './assignment-exist.guard';

describe('AssignmentExistGuard', () => {
  let guard: AssignmentExistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AssignmentExistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
