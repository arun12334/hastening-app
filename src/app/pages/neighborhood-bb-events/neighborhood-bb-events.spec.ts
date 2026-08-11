import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeighborhoodBbEvents } from './neighborhood-bb-events';

describe('NeighborhoodBbEvents', () => {
  let component: NeighborhoodBbEvents;
  let fixture: ComponentFixture<NeighborhoodBbEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeighborhoodBbEvents],
    }).compileComponents();

    fixture = TestBed.createComponent(NeighborhoodBbEvents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
