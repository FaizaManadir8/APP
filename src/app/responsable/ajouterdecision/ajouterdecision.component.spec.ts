import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterdecisionComponent } from './ajouterdecision.component';

describe('AjouterdecisionComponent', () => {
  let component: AjouterdecisionComponent;
  let fixture: ComponentFixture<AjouterdecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterdecisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterdecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
