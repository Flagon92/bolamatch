import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuelosComponent } from './duelos.component';

describe('DuelosComponent', () => {
  let component: DuelosComponent;
  let fixture: ComponentFixture<DuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuelosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
