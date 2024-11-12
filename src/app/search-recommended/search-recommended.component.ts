import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-search-recommended',
  standalone: true,
  imports: [MatSelectModule,MatButtonModule],
  templateUrl: './search-recommended.component.html',
  styleUrl: './search-recommended.component.scss'
})
export class SearchRecommendedComponent {

}
