import { TestBed, inject } from '@angular/core/testing';

import { CarOwnerDataService } from './car-owner-data.service';

describe('CarOwnerDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarOwnerDataService]
    });
  });

  it('should be created', inject([CarOwnerDataService], (service: CarOwnerDataService) => {
    expect(service).toBeTruthy();
  }));
});
