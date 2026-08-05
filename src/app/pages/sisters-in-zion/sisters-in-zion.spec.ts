import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistersInZion } from './sisters-in-zion';

describe('SistersInZion', () => {
  let component: SistersInZion;
  let fixture: ComponentFixture<SistersInZion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistersInZion],
    }).compileComponents();

    fixture = TestBed.createComponent(SistersInZion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
