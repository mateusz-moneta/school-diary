import { TestBed } from '@angular/core/testing';

import { ConfigurationGuard } from './configuration.guard';

describe('ConfigurationGuard', () => {
  let guard: ConfigurationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConfigurationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
