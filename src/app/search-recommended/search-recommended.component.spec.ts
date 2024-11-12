import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchRecommendedComponent } from './search-recommended.component';

describe('SearchRecommendedComponent', () => {
  let component: SearchRecommendedComponent;
  let fixture: ComponentFixture<SearchRecommendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchRecommendedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchRecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
