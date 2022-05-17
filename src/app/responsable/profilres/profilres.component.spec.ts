import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilresComponent } from './profilres.component';

describe('ProfilresComponent', () => {
  let component: ProfilresComponent;
  let fixture: ComponentFixture<ProfilresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
