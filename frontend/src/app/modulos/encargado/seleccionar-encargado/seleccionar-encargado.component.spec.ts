import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarEncargadoComponent } from './seleccionar-encargado.component';

describe('SeleccionarEncargadoComponent', () => {
  let component: SeleccionarEncargadoComponent;
  let fixture: ComponentFixture<SeleccionarEncargadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionarEncargadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarEncargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
