import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorshipingChristThroughMusic } from './worshiping-christ-through-music';

describe('WorshipingChristThroughMusic', () => {
  let component: WorshipingChristThroughMusic;
  let fixture: ComponentFixture<WorshipingChristThroughMusic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorshipingChristThroughMusic],
    }).compileComponents();

    fixture = TestBed.createComponent(WorshipingChristThroughMusic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
