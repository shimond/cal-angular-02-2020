import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardTypeIconComponent } from './credit-card-type-icon.component';

describe('CreditCardTypeIconComponent', () => {
  let component: CreditCardTypeIconComponent;
  let fixture: ComponentFixture<CreditCardTypeIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardTypeIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardTypeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
