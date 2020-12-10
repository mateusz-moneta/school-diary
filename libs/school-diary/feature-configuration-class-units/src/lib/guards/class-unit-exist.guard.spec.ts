import { TestBed } from '@angular/core/testing';

import { ClassUnitExistGuard } from './class-unit-exist.guard';

describe('ClassUnitExistGuard', () => {
  let guard: ClassUnitExistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ClassUnitExistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
