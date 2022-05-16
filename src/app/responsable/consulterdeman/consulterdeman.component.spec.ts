import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterdemanComponent } from './consulterdeman.component';

describe('ConsulterdemanComponent', () => {
  let component: ConsulterdemanComponent;
  let fixture: ComponentFixture<ConsulterdemanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterdemanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterdemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
