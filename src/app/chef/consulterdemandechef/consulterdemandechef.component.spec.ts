import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterdemandechefComponent } from './consulterdemandechef.component';

describe('ConsulterdemandechefComponent', () => {
  let component: ConsulterdemandechefComponent;
  let fixture: ComponentFixture<ConsulterdemandechefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterdemandechefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterdemandechefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
