import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LovingOurNeighbor } from './loving-our-neighbor';

describe('LovingOurNeighbor', () => {
  let component: LovingOurNeighbor;
  let fixture: ComponentFixture<LovingOurNeighbor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LovingOurNeighbor],
    }).compileComponents();

    fixture = TestBed.createComponent(LovingOurNeighbor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
