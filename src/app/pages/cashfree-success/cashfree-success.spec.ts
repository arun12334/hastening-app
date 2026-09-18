import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashfreeSuccess } from './cashfree-success';

describe('CashfreeSuccess', () => {
  let component: CashfreeSuccess;
  let fixture: ComponentFixture<CashfreeSuccess>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashfreeSuccess],
    }).compileComponents();

    fixture = TestBed.createComponent(CashfreeSuccess);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
