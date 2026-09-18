import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashfreeGateway } from './cashfree-gateway';

describe('CashfreeGateway', () => {
  let component: CashfreeGateway;
  let fixture: ComponentFixture<CashfreeGateway>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashfreeGateway],
    }).compileComponents();

    fixture = TestBed.createComponent(CashfreeGateway);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
