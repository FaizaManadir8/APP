import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteragentComponent } from './ajouteragent.component';

describe('AjouteragentComponent', () => {
  let component: AjouteragentComponent;
  let fixture: ComponentFixture<AjouteragentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteragentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteragentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
