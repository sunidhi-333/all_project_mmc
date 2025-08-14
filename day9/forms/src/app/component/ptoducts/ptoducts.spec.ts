import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ptoducts } from './ptoducts';

describe('Ptoducts', () => {
  let component: Ptoducts;
  let fixture: ComponentFixture<Ptoducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ptoducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ptoducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
