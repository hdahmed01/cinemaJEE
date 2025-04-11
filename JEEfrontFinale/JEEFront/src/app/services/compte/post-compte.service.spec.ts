import { TestBed } from '@angular/core/testing';

import { PostCompteService } from './post-compte.service';

describe('PostCompteService', () => {
  let service: PostCompteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostCompteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
