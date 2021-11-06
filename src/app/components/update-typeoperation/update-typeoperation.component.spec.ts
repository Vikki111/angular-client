import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypeoperationComponent } from './update-typeoperation.component';

describe('UpdateTypeoperationComponent', () => {
  let component: UpdateTypeoperationComponent;
  let fixture: ComponentFixture<UpdateTypeoperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTypeoperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTypeoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
