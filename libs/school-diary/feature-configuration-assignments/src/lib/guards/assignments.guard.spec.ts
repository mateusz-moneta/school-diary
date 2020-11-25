import { TestBed } from '@angular/core/testing';

import { AssignmentsGuard } from './class-rooms.guard';

describe('ClassRoomsGuard', () => {
  let guard: AssignmentsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AssignmentsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
