import { TestBed } from '@angular/core/testing';

import { ListSalleProgService } from './list-salle-prog.service';

describe('ListSalleProgService', () => {
  let service: ListSalleProgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListSalleProgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
