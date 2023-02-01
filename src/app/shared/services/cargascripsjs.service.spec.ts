import { TestBed } from '@angular/core/testing';

import { CargascripsjsService } from './cargascripsjs.service';

describe('CargascripsjsService', () => {
  let service: CargascripsjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargascripsjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
