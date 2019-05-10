import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteNotasEstudianteComponent } from './reporte-notas-estudiante.component';

describe('ReporteNotasEstudianteComponent', () => {
  let component: ReporteNotasEstudianteComponent;
  let fixture: ComponentFixture<ReporteNotasEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteNotasEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteNotasEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
