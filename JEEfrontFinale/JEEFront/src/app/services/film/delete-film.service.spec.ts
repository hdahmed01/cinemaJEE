import { TestBed } from '@angular/core/testing';

import { DeleteFilmService } from './delete-film.service';

describe('DeleteFilmService', () => {
  let service: DeleteFilmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteFilmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
