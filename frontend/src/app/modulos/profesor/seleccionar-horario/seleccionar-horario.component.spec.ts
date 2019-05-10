import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarHorarioComponent } from './seleccionar-horario.component';

describe('SeleccionarHorarioComponent', () => {
  let component: SeleccionarHorarioComponent;
  let fixture: ComponentFixture<SeleccionarHorarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionarHorarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
