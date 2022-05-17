import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesdemandeschefComponent } from './lesdemandeschef.component';

describe('LesdemandeschefComponent', () => {
  let component: LesdemandeschefComponent;
  let fixture: ComponentFixture<LesdemandeschefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesdemandeschefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesdemandeschefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
