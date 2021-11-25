import { TestBed } from '@angular/core/testing';

import { StramitesService } from './stramites.service';

describe('StramitesService', () => {
  let service: StramitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StramitesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
