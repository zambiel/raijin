import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prototype } from './prototype';

describe('Prototype', () => {
  let component: Prototype;
  let fixture: ComponentFixture<Prototype>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prototype]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prototype);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
