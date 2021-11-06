import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeoperationComponent } from './update-employeeoperation.component';

describe('UpdateEmployeeoperationComponent', () => {
  let component: UpdateEmployeeoperationComponent;
  let fixture: ComponentFixture<UpdateEmployeeoperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeoperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
