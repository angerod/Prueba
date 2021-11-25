import { TestBed } from '@angular/core/testing';

import { SlistausuariosService } from './slistausuarios.service';

describe('SlistausuariosService', () => {
  let service: SlistausuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlistausuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
