import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoiningEmmasReliefSociety } from './joining-emmas-relief-society';

describe('JoiningEmmasReliefSociety', () => {
  let component: JoiningEmmasReliefSociety;
  let fixture: ComponentFixture<JoiningEmmasReliefSociety>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoiningEmmasReliefSociety],
    }).compileComponents();

    fixture = TestBed.createComponent(JoiningEmmasReliefSociety);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
