import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationToUnity } from './invitation-to-unity';

describe('InvitationToUnity', () => {
  let component: InvitationToUnity;
  let fixture: ComponentFixture<InvitationToUnity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvitationToUnity],
    }).compileComponents();

    fixture = TestBed.createComponent(InvitationToUnity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
