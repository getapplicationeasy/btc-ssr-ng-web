import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { PromotionSlidebarComponent } from "./promotion-slidebar/promotion-slidebar.component";
import { ProductCategoryComponent } from "./product-category/product-category.component";
import { ProductRecommendComponent } from "./product-recommend/product-recommend.component";
import { SearchRecommendedComponent } from "./search-recommended/search-recommended.component";
import { FeatureBSolutionComponent } from "./feature-b-solution/feature-b-solution.component";
import { VideosBSolutionComponent } from "./videos-b-solution/videos-b-solution.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MainMenuComponent,
    PromotionSlidebarComponent,
    ProductCategoryComponent,
    ProductRecommendComponent,
    SearchRecommendedComponent,
    FeatureBSolutionComponent,
    VideosBSolutionComponent,
    AboutUsComponent,
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'btc-ssr-ng-web';
}
