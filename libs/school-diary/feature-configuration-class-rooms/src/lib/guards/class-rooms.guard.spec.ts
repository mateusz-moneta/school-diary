import { TestBed } from '@angular/core/testing';

import { ClassRoomsGuard } from './class-rooms.guard';

describe('ClassRoomsGuard', () => {
  let guard: ClassRoomsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ClassRoomsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
