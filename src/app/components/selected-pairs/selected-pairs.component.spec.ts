import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedPairsComponent } from './selected-pairs.component';

describe('SelectedPairsComponent', () => {
  let component: SelectedPairsComponent;
  let fixture: ComponentFixture<SelectedPairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedPairsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedPairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
