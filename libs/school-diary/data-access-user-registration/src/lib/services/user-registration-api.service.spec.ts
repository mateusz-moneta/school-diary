import { TestBed } from '@angular/core/testing';

import { UserRegistrationApiService } from './user-registration-api.service';

describe('UserRegistrationApiService', () => {
  let service: UserRegistrationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegistrationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
