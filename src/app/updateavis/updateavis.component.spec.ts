import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateavisComponent } from './updateavis.component';

describe('UpdateavisComponent', () => {
  let component: UpdateavisComponent;
  let fixture: ComponentFixture<UpdateavisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateavisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateavisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
