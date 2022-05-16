import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviComponent } from './avi.component';

describe('AviComponent', () => {
  let component: AviComponent;
  let fixture: ComponentFixture<AviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
