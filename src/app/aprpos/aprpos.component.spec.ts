import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprposComponent } from './aprpos.component';

describe('AprposComponent', () => {
  let component: AprposComponent;
  let fixture: ComponentFixture<AprposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
