import { TestBed } from '@angular/core/testing';

import { ListSallesService } from './list--salles.service';

describe('ListSallesService', () => {
  let service: ListSallesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListSallesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
