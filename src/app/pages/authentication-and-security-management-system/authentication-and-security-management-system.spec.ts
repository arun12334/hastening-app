import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationAndSecurityManagementSystem } from './authentication-and-security-management-system';

describe('AuthenticationAndSecurityManagementSystem', () => {
  let component: AuthenticationAndSecurityManagementSystem;
  let fixture: ComponentFixture<AuthenticationAndSecurityManagementSystem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticationAndSecurityManagementSystem],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthenticationAndSecurityManagementSystem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
