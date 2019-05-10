import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarInstrumentosComponent } from './seleccionar-instrumentos.component';

describe('SeleccionarInstrumentosComponent', () => {
  let component: SeleccionarInstrumentosComponent;
  let fixture: ComponentFixture<SeleccionarInstrumentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionarInstrumentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarInstrumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
