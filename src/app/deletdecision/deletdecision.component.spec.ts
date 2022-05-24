import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletdecisionComponent } from './deletdecision.component';

describe('DeletdecisionComponent', () => {
  let component: DeletdecisionComponent;
  let fixture: ComponentFixture<DeletdecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletdecisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletdecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
