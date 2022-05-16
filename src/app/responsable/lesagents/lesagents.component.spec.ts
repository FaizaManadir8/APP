import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesagentsComponent } from './lesagents.component';

describe('LesagentsComponent', () => {
  let component: LesagentsComponent;
  let fixture: ComponentFixture<LesagentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesagentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesagentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
