import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongemaladieComponent } from './congemaladie.component';

describe('CongemaladieComponent', () => {
  let component: CongemaladieComponent;
  let fixture: ComponentFixture<CongemaladieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongemaladieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongemaladieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
