import { TestBed } from '@angular/core/testing';

import { PostReserverService } from './post-reserver.service';

describe('PostReserverService', () => {
  let service: PostReserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostReserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
