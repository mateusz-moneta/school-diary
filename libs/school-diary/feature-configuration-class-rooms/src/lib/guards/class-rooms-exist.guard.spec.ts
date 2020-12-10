import { TestBed } from '@angular/core/testing';

import { ClassRoomsExistGuard } from './class-rooms-exist.guard';

describe('ClassRoomsExistGuard', () => {
  let guard: ClassRoomsExistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ClassRoomsExistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
