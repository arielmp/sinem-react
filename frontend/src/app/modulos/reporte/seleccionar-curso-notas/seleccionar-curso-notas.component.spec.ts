import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarCursoNotasComponent } from './seleccionar-curso-notas.component';

describe('SeleccionarCursoNotasComponent', () => {
  let component: SeleccionarCursoNotasComponent;
  let fixture: ComponentFixture<SeleccionarCursoNotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionarCursoNotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarCursoNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
