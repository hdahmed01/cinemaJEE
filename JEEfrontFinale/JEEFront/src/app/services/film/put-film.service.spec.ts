import { TestBed } from '@angular/core/testing';

import { PutFilmService } from './put-film.service';

describe('PutFilmService', () => {
  let service: PutFilmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutFilmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
