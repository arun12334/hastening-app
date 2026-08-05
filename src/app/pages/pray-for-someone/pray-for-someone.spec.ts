import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayForSomeone } from './pray-for-someone';

describe('PrayForSomeone', () => {
  let component: PrayForSomeone;
  let fixture: ComponentFixture<PrayForSomeone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrayForSomeone],
    }).compileComponents();

    fixture = TestBed.createComponent(PrayForSomeone);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
