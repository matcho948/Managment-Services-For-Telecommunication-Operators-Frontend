import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindcustomerComponent } from './findcustomer.component';

describe('FindcustomerComponent', () => {
  let component: FindcustomerComponent;
  let fixture: ComponentFixture<FindcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindcustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
