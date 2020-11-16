import { TestBed } from '@angular/core/testing';

import { FeatureDashboardGuard } from './feature-dashboard.guard';

describe('FeatureDashboardGuard', () => {
  let guard: FeatureDashboardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FeatureDashboardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
