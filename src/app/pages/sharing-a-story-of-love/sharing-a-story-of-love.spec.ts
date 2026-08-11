import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingAStoryOfLove } from './sharing-a-story-of-love';

describe('SharingAStoryOfLove', () => {
  let component: SharingAStoryOfLove;
  let fixture: ComponentFixture<SharingAStoryOfLove>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharingAStoryOfLove],
    }).compileComponents();

    fixture = TestBed.createComponent(SharingAStoryOfLove);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
