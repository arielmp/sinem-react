import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteCursoNotasComponent } from './reporte-curso-notas.component';

describe('ReporteCursoNotasComponent', () => {
  let component: ReporteCursoNotasComponent;
  let fixture: ComponentFixture<ReporteCursoNotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteCursoNotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteCursoNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
