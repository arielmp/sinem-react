import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarEstudianteNotasComponent } from './seleccionar-estudiante-notas.component';

describe('SeleccionarEstudianteNotasComponent', () => {
  let component: SeleccionarEstudianteNotasComponent;
  let fixture: ComponentFixture<SeleccionarEstudianteNotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionarEstudianteNotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarEstudianteNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
