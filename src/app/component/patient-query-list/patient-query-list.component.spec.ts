import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientQueryListComponent } from './patient-query-list.component';

describe('PatientQueryListComponent', () => {
  let component: PatientQueryListComponent;
  let fixture: ComponentFixture<PatientQueryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientQueryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientQueryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
