import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoesUnityBaptism } from './does-unity-baptism';

describe('DoesUnityBaptism', () => {
  let component: DoesUnityBaptism;
  let fixture: ComponentFixture<DoesUnityBaptism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoesUnityBaptism],
    }).compileComponents();

    fixture = TestBed.createComponent(DoesUnityBaptism);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
