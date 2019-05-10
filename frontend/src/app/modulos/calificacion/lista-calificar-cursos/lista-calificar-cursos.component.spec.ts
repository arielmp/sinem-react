import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCalificarCursosComponent } from './lista-calificar-cursos.component';

describe('ListaCalificarCursosComponent', () => {
  let component: ListaCalificarCursosComponent;
  let fixture: ComponentFixture<ListaCalificarCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCalificarCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCalificarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
