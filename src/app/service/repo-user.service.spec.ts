import { TestBed, inject } from '@angular/core/testing';

import { RepoUserService } from './repo-user.service';

describe('RepoUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepoUserService]
    });
  });

  it('should be created', inject([RepoUserService], (service: RepoUserService) => {
    expect(service).toBeTruthy();
  }));
});
