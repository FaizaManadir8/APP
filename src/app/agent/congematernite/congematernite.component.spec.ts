import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongematerniteComponent } from './congematernite.component';

describe('CongematerniteComponent', () => {
  let component: CongematerniteComponent;
  let fixture: ComponentFixture<CongematerniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongematerniteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongematerniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
