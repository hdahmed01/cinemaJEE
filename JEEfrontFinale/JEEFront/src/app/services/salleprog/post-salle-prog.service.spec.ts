import { TestBed } from '@angular/core/testing';

import { PostSalleProgService } from './post-salle-prog.service';

describe('PostSalleProgService', () => {
  let service: PostSalleProgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostSalleProgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
