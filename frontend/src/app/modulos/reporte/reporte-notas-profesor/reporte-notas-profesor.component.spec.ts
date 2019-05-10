import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteNotasProfesorComponent } from './reporte-notas-profesor.component';

describe('ReporteNotasProfesorComponent', () => {
  let component: ReporteNotasProfesorComponent;
  let fixture: ComponentFixture<ReporteNotasProfesorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteNotasProfesorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteNotasProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
