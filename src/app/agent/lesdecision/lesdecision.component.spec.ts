import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesdecisionComponent } from './lesdecision.component';

describe('LesdecisionComponent', () => {
  let component: LesdecisionComponent;
  let fixture: ComponentFixture<LesdecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesdecisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesdecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
