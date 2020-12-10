import { TestBed } from '@angular/core/testing';

import { LessonHourExistGuard } from './lesson-hour-exist.guard';

describe('LessonHourExistGuard', () => {
  let guard: LessonHourExistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LessonHourExistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
