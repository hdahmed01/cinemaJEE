import { TestBed } from '@angular/core/testing';

import { PostSeanceService } from './post-seance.service';

describe('PostSeanceService', () => {
  let service: PostSeanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostSeanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
