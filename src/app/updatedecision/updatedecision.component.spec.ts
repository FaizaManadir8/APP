import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedecisionComponent } from './updatedecision.component';

describe('UpdatedecisionComponent', () => {
  let component: UpdatedecisionComponent;
  let fixture: ComponentFixture<UpdatedecisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedecisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedecisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
