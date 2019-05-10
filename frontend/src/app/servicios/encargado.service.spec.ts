import { TestBed } from '@angular/core/testing';

import { EncargadoService } from './encargado.service';

describe('EncargadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EncargadoService = TestBed.get(EncargadoService);
    expect(service).toBeTruthy();
  });
});
