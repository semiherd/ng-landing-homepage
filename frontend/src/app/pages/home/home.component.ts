import { Component } from '@angular/core';
import { SearchBarComponent } from '../../shared/search-bar/search-bar.component';
import { FavoriteDestinationsComponent } from "../../features/favorites/favorite-destinations.component";

import { ReviewsComponent } from '../../features/reviews/reviews.component';
import { ParallaxDirective } from 'src/app/shared/directives/parallax.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  styleUrls: ['./home.component.css'],
  imports: [
    ParallaxDirective,
    SearchBarComponent,
    FavoriteDestinationsComponent,
    ReviewsComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
