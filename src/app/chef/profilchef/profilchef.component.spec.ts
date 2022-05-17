import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilchefComponent } from './profilchef.component';

describe('ProfilchefComponent', () => {
  let component: ProfilchefComponent;
  let fixture: ComponentFixture<ProfilchefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilchefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilchefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
