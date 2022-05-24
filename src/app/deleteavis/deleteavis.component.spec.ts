import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteavisComponent } from './deleteavis.component';

describe('DeleteavisComponent', () => {
  let component: DeleteavisComponent;
  let fixture: ComponentFixture<DeleteavisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteavisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteavisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
