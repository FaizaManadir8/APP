import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulteravisComponent } from './consulteravis.component';

describe('ConsulteravisComponent', () => {
  let component: ConsulteravisComponent;
  let fixture: ComponentFixture<ConsulteravisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulteravisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulteravisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
