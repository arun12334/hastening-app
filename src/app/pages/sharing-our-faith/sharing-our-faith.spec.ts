import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingOurFaith } from './sharing-our-faith';

describe('SharingOurFaith', () => {
  let component: SharingOurFaith;
  let fixture: ComponentFixture<SharingOurFaith>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharingOurFaith],
    }).compileComponents();

    fixture = TestBed.createComponent(SharingOurFaith);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
