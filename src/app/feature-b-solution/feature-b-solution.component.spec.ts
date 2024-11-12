import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBSolutionComponent } from './feature-b-solution.component';

describe('FeatureBSolutionComponent', () => {
  let component: FeatureBSolutionComponent;
  let fixture: ComponentFixture<FeatureBSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureBSolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureBSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
