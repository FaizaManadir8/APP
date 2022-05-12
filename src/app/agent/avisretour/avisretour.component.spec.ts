import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisretourComponent } from './avisretour.component';

describe('AvisretourComponent', () => {
  let component: AvisretourComponent;
  let fixture: ComponentFixture<AvisretourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisretourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisretourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
