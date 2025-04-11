import { TestBed } from '@angular/core/testing';

import { ListComptesService } from './list-comptes.service';

describe('ListComptesService', () => {
  let service: ListComptesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListComptesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
