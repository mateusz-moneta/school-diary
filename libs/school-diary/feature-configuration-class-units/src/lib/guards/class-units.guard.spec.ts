import { TestBed } from '@angular/core/testing';

import { ClassUnitsGuard } from './class-units.guard';

describe('ClassUnitsGuard', () => {
  let guard: ClassUnitsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ClassUnitsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
