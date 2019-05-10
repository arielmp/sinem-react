import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInstrumentosComponent } from './lista-instrumentos.component';

describe('ListaInstrumentosComponent', () => {
  let component: ListaInstrumentosComponent;
  let fixture: ComponentFixture<ListaInstrumentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaInstrumentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaInstrumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
