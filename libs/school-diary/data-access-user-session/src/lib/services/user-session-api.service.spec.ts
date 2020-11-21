import { TestBed } from '@angular/core/testing';

import { UserSessionApiService } from './user-session-api.service';

describe('UserSessionApiService', () => {
  let service: UserSessionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSessionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
