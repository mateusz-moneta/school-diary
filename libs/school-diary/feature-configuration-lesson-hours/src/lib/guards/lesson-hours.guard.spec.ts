import { TestBed } from '@angular/core/testing';

import { LessonHoursGuard } from './lesson-hours.guard';

describe('LessonHoursGuard', () => {
  let guard: LessonHoursGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LessonHoursGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
