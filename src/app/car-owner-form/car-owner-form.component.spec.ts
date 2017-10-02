import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOwnerFormComponent } from './car-owner-form.component';

describe('CarOwnerFormComponent', () => {
  let component: CarOwnerFormComponent;
  let fixture: ComponentFixture<CarOwnerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarOwnerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarOwnerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
