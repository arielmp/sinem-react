import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarProfesorNotasComponent } from './seleccionar-profesor-notas.component';

describe('SeleccionarProfesorNotasComponent', () => {
  let component: SeleccionarProfesorNotasComponent;
  let fixture: ComponentFixture<SeleccionarProfesorNotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionarProfesorNotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarProfesorNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
