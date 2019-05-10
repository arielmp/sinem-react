import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCalificarCursoComponent } from './form-calificar-curso.component';

describe('FormCalificarCursoComponent', () => {
  let component: FormCalificarCursoComponent;
  let fixture: ComponentFixture<FormCalificarCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCalificarCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCalificarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
