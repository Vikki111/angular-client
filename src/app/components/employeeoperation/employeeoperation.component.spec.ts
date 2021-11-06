import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeoperationComponent } from './employeeoperation.component';

describe('EmployeeoperationComponent', () => {
  let component: EmployeeoperationComponent;
  let fixture: ComponentFixture<EmployeeoperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeoperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
