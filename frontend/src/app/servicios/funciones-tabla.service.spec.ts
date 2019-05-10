import { TestBed } from '@angular/core/testing';

import { FuncionesTablaService } from './funciones-tabla.service';

describe('FuncionesTablaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuncionesTablaService = TestBed.get(FuncionesTablaService);
    expect(service).toBeTruthy();
  });
});
