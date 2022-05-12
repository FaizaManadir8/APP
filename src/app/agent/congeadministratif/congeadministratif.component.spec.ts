import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeadministratifComponent } from './congeadministratif.component';

describe('CongeadministratifComponent', () => {
  let component: CongeadministratifComponent;
  let fixture: ComponentFixture<CongeadministratifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongeadministratifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongeadministratifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
