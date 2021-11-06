import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTypeoperationComponent } from './create-typeoperation.component';

describe('CreateTypeoperationComponent', () => {
  let component: CreateTypeoperationComponent;
  let fixture: ComponentFixture<CreateTypeoperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTypeoperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTypeoperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
