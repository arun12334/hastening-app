import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinAJustserveActivity } from './join-a-justserve-activity';

describe('JoinAJustserveActivity', () => {
  let component: JoinAJustserveActivity;
  let fixture: ComponentFixture<JoinAJustserveActivity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinAJustserveActivity],
    }).compileComponents();

    fixture = TestBed.createComponent(JoinAJustserveActivity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
