import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInstrumentoComponent } from './form-instrumento.component';

describe('FormInstrumentoComponent', () => {
  let component: FormInstrumentoComponent;
  let fixture: ComponentFixture<FormInstrumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInstrumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInstrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
