import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesavisComponent } from './lesavis.component';

describe('LesavisComponent', () => {
  let component: LesavisComponent;
  let fixture: ComponentFixture<LesavisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesavisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesavisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
