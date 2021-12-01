import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorductdetailComponent } from './porductdetail.component';

describe('PorductdetailComponent', () => {
  let component: PorductdetailComponent;
  let fixture: ComponentFixture<PorductdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorductdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorductdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
