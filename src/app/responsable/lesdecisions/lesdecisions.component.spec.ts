import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesdecisionsComponent } from './lesdecisions.component';

describe('LesdecisionsComponent', () => {
  let component: LesdecisionsComponent;
  let fixture: ComponentFixture<LesdecisionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesdecisionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesdecisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
