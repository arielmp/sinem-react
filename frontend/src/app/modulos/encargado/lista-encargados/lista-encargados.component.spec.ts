import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEncargadosComponent } from './lista-encargados.component';

describe('ListaEncargadosComponent', () => {
  let component: ListaEncargadosComponent;
  let fixture: ComponentFixture<ListaEncargadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEncargadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEncargadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
