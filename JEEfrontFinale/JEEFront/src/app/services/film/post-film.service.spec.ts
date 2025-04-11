import { TestBed } from '@angular/core/testing';

import { PostFilmService } from './post-film.service';

describe('PostFilmService', () => {
  let service: PostFilmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostFilmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
