import { TestBed, inject } from '@angular/core/testing';

import { UserIndividualService } from './user-individual.service';

describe('UserIndividualService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserIndividualService]
    });
  });

  it('should be created', inject([UserIndividualService], (service: UserIndividualService) => {
    expect(service).toBeTruthy();
  }));
});
