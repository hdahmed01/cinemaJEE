import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleprogComponent } from './salleprog.component';

describe('SalleprogComponent', () => {
  let component: SalleprogComponent;
  let fixture: ComponentFixture<SalleprogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalleprogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalleprogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
