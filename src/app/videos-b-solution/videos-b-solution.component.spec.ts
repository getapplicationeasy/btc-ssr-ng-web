import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosBSolutionComponent } from './videos-b-solution.component';

describe('VideosBSolutionComponent', () => {
  let component: VideosBSolutionComponent;
  let fixture: ComponentFixture<VideosBSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideosBSolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosBSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
