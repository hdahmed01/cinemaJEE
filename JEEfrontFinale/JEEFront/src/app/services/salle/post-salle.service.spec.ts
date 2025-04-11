import { TestBed } from '@angular/core/testing';

import { PostSalleService } from './post-salle.service';

describe('PostSalleService', () => {
  let service: PostSalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostSalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
