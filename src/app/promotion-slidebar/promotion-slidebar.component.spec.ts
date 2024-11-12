import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionSlidebarComponent } from './promotion-slidebar.component';

describe('PromotionSlidebarComponent', () => {
  let component: PromotionSlidebarComponent;
  let fixture: ComponentFixture<PromotionSlidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromotionSlidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionSlidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
