import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentCalculatorComponent } from './investment-calculator.component';

describe('InvestmentCalculatorComponent', () => {
  let component: InvestmentCalculatorComponent;
  let fixture: ComponentFixture<InvestmentCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
