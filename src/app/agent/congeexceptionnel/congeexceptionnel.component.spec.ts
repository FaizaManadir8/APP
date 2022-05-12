import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeexceptionnelComponent } from './congeexceptionnel.component';

describe('CongeexceptionnelComponent', () => {
  let component: CongeexceptionnelComponent;
  let fixture: ComponentFixture<CongeexceptionnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongeexceptionnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongeexceptionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
