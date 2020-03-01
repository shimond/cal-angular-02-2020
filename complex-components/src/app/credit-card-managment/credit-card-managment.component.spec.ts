import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardManagmentComponent } from './credit-card-managment.component';

describe('CreditCardManagmentComponent', () => {
  let component: CreditCardManagmentComponent;
  let fixture: ComponentFixture<CreditCardManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
