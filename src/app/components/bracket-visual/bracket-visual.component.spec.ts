import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketVisualComponent } from './bracket-visual.component';

describe('BracketVisualComponent', () => {
  let component: BracketVisualComponent;
  let fixture: ComponentFixture<BracketVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BracketVisualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BracketVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
