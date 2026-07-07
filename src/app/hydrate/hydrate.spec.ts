import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hydrate } from './hydrate';

describe('Hydrate', () => {
  let component: Hydrate;
  let fixture: ComponentFixture<Hydrate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hydrate],
    }).compileComponents();

    fixture = TestBed.createComponent(Hydrate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
