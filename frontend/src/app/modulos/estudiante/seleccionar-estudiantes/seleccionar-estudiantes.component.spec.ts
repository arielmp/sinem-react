import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarEstudiantesComponent } from './seleccionar-estudiantes.component';

describe('SeleccionarEstudiantesComponent', () => {
  let component: SeleccionarEstudiantesComponent;
  let fixture: ComponentFixture<SeleccionarEstudiantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionarEstudiantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
