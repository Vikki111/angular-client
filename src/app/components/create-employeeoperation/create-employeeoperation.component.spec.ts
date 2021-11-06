import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeoperationComponent } from './create-employeeoperation.component';

describe('CreateEmployeeoperationComponent', () => {
  let component: CreateEmployeeoperationComponent;
  let fixture: ComponentFixture<CreateEmployeeoperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployeeoperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
