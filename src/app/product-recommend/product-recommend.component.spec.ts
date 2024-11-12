import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRecommendComponent } from './product-recommend.component';

describe('ProductRecommendComponent', () => {
  let component: ProductRecommendComponent;
  let fixture: ComponentFixture<ProductRecommendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductRecommendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
