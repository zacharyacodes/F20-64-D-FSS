import { TestBed, inject } from '@angular/core/testing';

import { UsersdataService } from './usersdata.service';

describe('UsersdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersdataService]
    });
  });

  it('should be created', inject([UsersdataService], (service: UsersdataService) => {
    expect(service).toBeTruthy();
  }));
});
