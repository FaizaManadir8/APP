import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterdecisionComponent } from './consulterdecision.component';

describe('ConsulterdecisionComponent', () => {
  let component: ConsulterdecisionComponent;
  let fixture: ComponentFixture<ConsulterdecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterdecisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterdecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
